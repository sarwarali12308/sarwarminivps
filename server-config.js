// ============================================================================
// SERVER-CONFIG.JS
// ============================================================================
// This is the ONLY file you normally need to touch.
//
// 50 test server slots are pre-built below (Server 1 .. Server 50) so the
// dropdown/list looks and behaves exactly like your test panel screenshots.
// Every slot is DISABLED by default except server1 and server2, which are
// wired to your two real backends:
//
//   server1 -> your Railway URL   (or Heroku / Render — any HTTP(S) URL)
//   server2 -> your VPS panel URL (http://51.75.118.5:20221)
//
// HOW SERVERS ARE PICKED (auto-fallback):
//   The site tries them in the order they appear below, skipping any
//   marked disabled. If server1 fails (timeout/refused/etc), the person
//   can just tap "Select" and pick server2 instead — nothing to redeploy.
//   (True automatic silent-fallback, trying server2 the instant server1
//   fails without the user picking again, is a further step — say the
//   word if you want that added; it needs one small change in index.html.)
//
// TO ENABLE A SERVER:
//   1. Find its block below (search "server1", "server2", etc.)
//   2. Replace the "url" with your real backend URL (no trailing slash).
//   3. Remove the line `disabled: true` (or set it to false).
//   4. Save, commit, push — Vercel redeploys automatically.
//
// URL FORMAT EXAMPLES (all work the same way):
//   Railway : https://your-app.up.railway.app
//   Heroku  : https://your-app.herokuapp.com
//   Render  : https://your-app.onrender.com
//   VPS/panel: http://51.75.118.5:20221
// ============================================================================

const SERVERS = [
    {
        id: "server1",
        name: "Server 1",
        // 👉 PASTE YOUR RAILWAY / HEROKU / RENDER URL HERE:
        url: "https://PASTE-YOUR-SERVER-1-URL-HERE",
        limit: 50
        // (enabled — this is your primary server)
    },
    {
        id: "server2",
        name: "Server 2",
        // 👉 Your VPS panel, wired in as an example:
        url: "http://51.75.118.5:20221",
        limit: 50
        // (enabled — this is your backup/VPS server)
    },
    {
        id: "server3",
        name: "Server 3",
        url: "https://PASTE-YOUR-SERVER-3-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server4",
        name: "Server 4",
        url: "https://PASTE-YOUR-SERVER-4-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server5",
        name: "Server 5",
        url: "https://PASTE-YOUR-SERVER-5-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server6",
        name: "Server 6",
        url: "https://PASTE-YOUR-SERVER-6-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server7",
        name: "Server 7",
        url: "https://PASTE-YOUR-SERVER-7-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server8",
        name: "Server 8",
        url: "https://PASTE-YOUR-SERVER-8-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server9",
        name: "Server 9",
        url: "https://PASTE-YOUR-SERVER-9-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server10",
        name: "Server 10",
        url: "https://PASTE-YOUR-SERVER-10-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server11",
        name: "Server 11",
        url: "https://PASTE-YOUR-SERVER-11-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server12",
        name: "Server 12",
        url: "https://PASTE-YOUR-SERVER-12-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server13",
        name: "Server 13",
        url: "https://PASTE-YOUR-SERVER-13-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server14",
        name: "Server 14",
        url: "https://PASTE-YOUR-SERVER-14-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server15",
        name: "Server 15",
        url: "https://PASTE-YOUR-SERVER-15-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server16",
        name: "Server 16",
        url: "https://PASTE-YOUR-SERVER-16-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server17",
        name: "Server 17",
        url: "https://PASTE-YOUR-SERVER-17-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server18",
        name: "Server 18",
        url: "https://PASTE-YOUR-SERVER-18-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server19",
        name: "Server 19",
        url: "https://PASTE-YOUR-SERVER-19-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server20",
        name: "Server 20",
        url: "https://PASTE-YOUR-SERVER-20-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server21",
        name: "Server 21",
        url: "https://PASTE-YOUR-SERVER-21-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server22",
        name: "Server 22",
        url: "https://PASTE-YOUR-SERVER-22-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server23",
        name: "Server 23",
        url: "https://PASTE-YOUR-SERVER-23-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server24",
        name: "Server 24",
        url: "https://PASTE-YOUR-SERVER-24-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server25",
        name: "Server 25",
        url: "https://PASTE-YOUR-SERVER-25-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server26",
        name: "Server 26",
        url: "https://PASTE-YOUR-SERVER-26-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server27",
        name: "Server 27",
        url: "https://PASTE-YOUR-SERVER-27-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server28",
        name: "Server 28",
        url: "https://PASTE-YOUR-SERVER-28-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server29",
        name: "Server 29",
        url: "https://PASTE-YOUR-SERVER-29-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server30",
        name: "Server 30",
        url: "https://PASTE-YOUR-SERVER-30-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server31",
        name: "Server 31",
        url: "https://PASTE-YOUR-SERVER-31-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server32",
        name: "Server 32",
        url: "https://PASTE-YOUR-SERVER-32-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server33",
        name: "Server 33",
        url: "https://PASTE-YOUR-SERVER-33-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server34",
        name: "Server 34",
        url: "https://PASTE-YOUR-SERVER-34-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server35",
        name: "Server 35",
        url: "https://PASTE-YOUR-SERVER-35-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server36",
        name: "Server 36",
        url: "https://PASTE-YOUR-SERVER-36-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server37",
        name: "Server 37",
        url: "https://PASTE-YOUR-SERVER-37-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server38",
        name: "Server 38",
        url: "https://PASTE-YOUR-SERVER-38-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server39",
        name: "Server 39",
        url: "https://PASTE-YOUR-SERVER-39-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server40",
        name: "Server 40",
        url: "https://PASTE-YOUR-SERVER-40-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server41",
        name: "Server 41",
        url: "https://PASTE-YOUR-SERVER-41-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server42",
        name: "Server 42",
        url: "https://PASTE-YOUR-SERVER-42-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server43",
        name: "Server 43",
        url: "https://PASTE-YOUR-SERVER-43-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server44",
        name: "Server 44",
        url: "https://PASTE-YOUR-SERVER-44-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server45",
        name: "Server 45",
        url: "https://PASTE-YOUR-SERVER-45-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server46",
        name: "Server 46",
        url: "https://PASTE-YOUR-SERVER-46-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server47",
        name: "Server 47",
        url: "https://PASTE-YOUR-SERVER-47-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server48",
        name: "Server 48",
        url: "https://PASTE-YOUR-SERVER-48-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server49",
        name: "Server 49",
        url: "https://PASTE-YOUR-SERVER-49-URL-HERE",
        limit: 50,
        disabled: true
    },
    {
        id: "server50",
        name: "Server 50",
        url: "https://PASTE-YOUR-SERVER-50-URL-HERE",
        limit: 50,
        disabled: true
    },
];

module.exports = { SERVERS };
