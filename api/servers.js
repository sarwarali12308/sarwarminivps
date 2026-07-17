// GET /api/servers
// Returns the list of backend bot servers (from server-config.js) so the
// pairing page can build its "Select a Server" dropdown. Disabled servers
// are filtered out before sending to the browser.

const { SERVERS } = require('../server-config');

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const visible = SERVERS
        .filter(s => !s.disabled)
        .map(({ id, name, url, limit }) => ({ id, name, url, limit }));
    res.status(200).json({ servers: visible });
};
