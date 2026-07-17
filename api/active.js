// GET /api/active?server=server1
// Proxies the backend bot's own /active endpoint. Works identically
// whether the target is Railway, Heroku, Render, or a raw VPS IP:port —
// it's just an HTTP(S) GET either way. Returns a DETAILED error reason
// on failure so you can tell what actually went wrong instead of a
// generic "unreachable".

const { SERVERS } = require('../server-config');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { server } = req.query;
    const target = SERVERS.find(s => s.id === server && !s.disabled);
    if (!target) return res.status(400).json({ error: 'Unknown or disabled server' });

    let url;
    try {
        url = new URL('/active', target.url);
    } catch (e) {
        return res.status(500).json({ error: 'Invalid server URL in server-config.js: ' + target.url });
    }

    try {
        const r = await fetch(url.toString(), {
            signal: AbortSignal.timeout(15000),
            headers: { 'User-Agent': 'sarwar-xd-mini-pairing-site' }
        });

        const raw = await r.text();
        let data;
        try {
            data = JSON.parse(raw);
        } catch (e) {
            return res.status(502).json({
                error: `Server responded but not with JSON (status ${r.status}). Check the URL points to your bot, not a login page or wrong port.`,
                count: 0,
                limit: target.limit ?? null
            });
        }

        if (!r.ok) {
            return res.status(502).json({
                error: `Server returned HTTP ${r.status}`,
                count: 0,
                limit: target.limit ?? null
            });
        }

        res.status(200).json({ count: data.count ?? 0, limit: target.limit ?? null });
    } catch (e) {
        // Give the real reason instead of a generic message — this is the
        // part that actually tells you what's wrong (timeout, DNS, refused
        // connection, TLS error, etc).
        let reason = e.message || String(e);
        if (e.name === 'TimeoutError' || e.name === 'AbortError') {
            reason = 'Timed out after 15s — server is slow, sleeping, or the port/firewall is blocking Vercel.';
        } else if (/ENOTFOUND|EAI_AGAIN/.test(reason)) {
            reason = 'DNS lookup failed — check the domain/IP in server-config.js is correct.';
        } else if (/ECONNREFUSED/.test(reason)) {
            reason = 'Connection refused — the port is closed or the bot isn\'t listening there.';
        } else if (/certificate|SSL|TLS/i.test(reason)) {
            reason = 'TLS/SSL error — try http:// instead of https:// (or vice versa) in server-config.js.';
        }
        res.status(502).json({ error: reason, count: 0, limit: target.limit ?? null });
    }
};
