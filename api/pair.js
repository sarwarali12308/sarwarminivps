// GET /api/pair?server=server1&number=923001234567
// Proxies the backend bot's /code endpoint. Platform-agnostic — Railway,
// Heroku, Render, or a raw VPS IP:port all work the same way since this
// is just a plain HTTP(S) GET request under the hood.

const { SERVERS } = require('../server-config');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { server, number } = req.query;
    if (!number) return res.status(400).json({ error: 'Number required' });

    const target = SERVERS.find(s => s.id === server && !s.disabled);
    if (!target) return res.status(400).json({ error: 'Unknown or disabled server' });

    let url;
    try {
        url = new URL('/code', target.url);
        url.searchParams.set('number', number);
    } catch (e) {
        return res.status(500).json({ error: 'Invalid server URL in server-config.js: ' + target.url });
    }

    try {
        const r = await fetch(url.toString(), {
            signal: AbortSignal.timeout(25000),
            headers: { 'User-Agent': 'sarwar-xd-mini-pairing-site' }
        });

        const raw = await r.text();
        let data;
        try {
            data = JSON.parse(raw);
        } catch (e) {
            return res.status(502).json({
                error: `Server responded but not with JSON (status ${r.status}). Check the URL/port is correct.`
            });
        }

        res.status(r.status).json(data);
    } catch (e) {
        let reason = e.message || String(e);
        if (e.name === 'TimeoutError' || e.name === 'AbortError') {
            reason = 'Timed out after 25s — server is slow, sleeping, or the port/firewall is blocking Vercel.';
        } else if (/ENOTFOUND|EAI_AGAIN/.test(reason)) {
            reason = 'DNS lookup failed — check the domain/IP in server-config.js is correct.';
        } else if (/ECONNREFUSED/.test(reason)) {
            reason = 'Connection refused — the port is closed or the bot isn\'t listening there.';
        } else if (/certificate|SSL|TLS/i.test(reason)) {
            reason = 'TLS/SSL error — try http:// instead of https:// (or vice versa) in server-config.js.';
        }
        res.status(502).json({ error: reason });
    }
};
