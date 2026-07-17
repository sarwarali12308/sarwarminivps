# SARWAR-MD Pairing Site (Vercel)

A pairing page styled like `ahmad-md.vercel.app` — green theme, tap-to-select
server list, live Active/Limit counter, "Wait Xs" cooldown, and a code box.

Your actual bot (Baileys + all commands) keeps running wherever it already
runs — Railway, a VPS panel, Heroku, Render. **Nothing about your bot
needs to change.** This is only the frontend + a thin proxy that talks to
your bot's existing `/code` and `/active` routes.

---

## What's already set up for you

- **50 server slots** are pre-built (Server 1 → Server 50), matching the
  test panel you showed.
- **`server1`** and **`server2`** are already wired to your two real
  backends and enabled:
  - `server1` → placeholder — put your Railway/Heroku/Render URL here
  - `server2` → your VPS panel: `http://51.75.118.5:20221`
- **Servers 3–50** exist but are `disabled: true` — they show up nowhere
  until you fill in a real URL and remove that line. Use them for testing
  more backends later.

## What you need to do

### Step 1 — Fill in your real server URL(s)
Open `server-config.js`. Find `server1` near the top:
```js
{
    id: "server1",
    name: "Server 1",
    url: "https://PASTE-YOUR-SERVER-1-URL-HERE",
    limit: 50
},
```
Replace the `url` with your real Railway (or Heroku/Render) URL, no
trailing slash. `server2` is already pointed at your VPS panel — leave it
as-is unless that IP/port changes.

### Step 2 — Push to GitHub, deploy on Vercel
```bash
cd pairing-site
git init
git add .
git commit -m "Initial pairing site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
Then on [vercel.com](https://vercel.com): **New Project** → import this
repo → Framework Preset **Other** → **Deploy**. No build command needed.

### Step 3 — Test
1. Open your `.vercel.app` URL.
2. Tap a server in the list (e.g. "Server 1" or "Server 2").
3. It should show live **Active / Limit** numbers.
4. Enter a WhatsApp number → **Generate Pair Code** → get a real 8-digit
   code, with a 30-second "Wait" cooldown after, exactly like the
   reference site.

---

## How the "auto-detect which server works" part behaves right now

Each server in the list is tried **when the person taps it** — the page
calls `/api/active?server=X` for whichever one they picked, and shows the
real error if that one is down (timeout, connection refused, etc. — see
Troubleshooting below). This means:

- If `server1` (say, Railway) is down, the person just taps **Select**
  and picks `server2` (VPS panel) instead — no code change needed.
- This is **manual** switching, not silent automatic failover. If you
  want the page to automatically try server2 the instant server1 fails
  (without the visitor picking again), that's a small addition — just
  ask and it'll be added.

## Works with ANY backend platform

This proxy is platform-agnostic — it's a plain HTTP(S) GET request under
the hood either way:

| Platform | URL format example |
|---|---|
| Railway | `https://your-app.up.railway.app` |
| Heroku | `https://your-app.herokuapp.com` |
| Render | `https://your-app.onrender.com` |
| VPS / panel | `http://51.75.118.5:20221` |

`http://` vs `https://` must match what your host actually serves — VPS
panels are often plain `http://`, while Railway/Heroku/Render are always
`https://`.

## File-by-file

| File | What it does |
|---|---|
| `index.html` | The visible pairing page (AHMAD-MD-style design). |
| `server-config.js` | **The file you edit.** 50 server slots, 2 enabled. |
| `api/servers.js` | Serverless function — sends the (enabled) server list to the browser. |
| `api/active.js` | Serverless function — proxies `/active` (live count) from your bot, with detailed error reasons. |
| `api/pair.js` | Serverless function — proxies `/code` (pairing code) from your bot. |
| `vercel.json` | CORS headers for the `/api` routes. |
| `package.json` | Basic project metadata, no dependencies needed. |

## Troubleshooting (shows the REAL reason, not a generic message)

- **"Timed out after 15s"** → server is slow, asleep, or a firewall/port
  is blocking Vercel's outbound request. For a VPS panel, check the
  panel's firewall allows external connections on that port.
- **"DNS lookup failed"** → the domain/IP in `server-config.js` has a typo.
- **"Connection refused"** → the port is closed, or the bot process isn't
  actually listening there right now.
- **"TLS/SSL error"** → try switching `http://` to `https://` (or the
  reverse) for that server's URL.
- **"Server responded but not with JSON"** → reachable, but not your bot
  — likely wrong port, or it hit a login/router page instead.

## Adding a real server to slots 3–50 later

1. Find that server's block in `server-config.js`.
2. Replace its `url` with the real backend URL.
3. Delete the `disabled: true` line in that block.
4. Push — Vercel redeploys, and it now appears in the list.
