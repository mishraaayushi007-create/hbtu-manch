# HBTU Manch

> The unified campus engagement platform for Harcourt Butler Technical University, Kanpur.

---

## Overview

HBTU Manch is a lightweight, zero-dependency campus web app that brings together clubs, councils, events, open calls, and student inductions under one roof. It runs entirely in the browser using localStorage — no backend, no login friction — and ships as a Progressive Web App so it can be installed on any device straight from the browser.

---

## Running Locally

1. **Clone or download** this repository
2. Open `index.html` with **VS Code's Live Server** extension
   *(Right-click `index.html` → "Open with Live Server")*
3. No build step, no Node.js required.

> [!TIP]
> Any static file server works — Python's `python -m http.server 8080` or the `serve` npm package both work fine.

---

## PWA Installation

When hosted on **GitHub Pages** or any **HTTPS** host, visit the site in Chrome or Edge and use the **"Install App"** prompt (address-bar icon or browser menu) to add HBTU Manch to your home screen or desktop. The service worker pre-caches all core assets so the app loads instantly — even offline.

---

## Features

- 📅 **Unified Timeline** — browse all upcoming campus events across clubs and councils, with filter chips by category (Technical, Cultural, Sports, Workshop, etc.)
- 🏛️ **Clubs & Councils Directory** — full profiles for every club and governing council with member counts, tags, and contact info
- 📢 **Open Calls** — public recruitment and open-position listings; students can apply directly in-app
- 🎯 **Induction Management** — club heads post induction rounds, track applicants, and publish shortlists
- 📊 **Club Head Dashboard** — event creation, submission inbox, and shortlist management scoped to the active club
- 🗺️ **Admin Overview** — platform-wide stats, schedule-clash detection, and leadership rotation tools
- 👤 **Student Profile** — personal timeline, club memberships, and application history
- 💾 **Offline-ready** — service worker caches all static assets; works without internet after first load
- 🔄 **Reset Demo Data** — one-click seed-data restoration for demos and screenshots

---

## Role Switcher (Demo)

The **segmented control** in the top bar lets you experience the app from three perspectives — no authentication required:

| Role | Description |
|---|---|
| **Student** | Default view. Browse events, discover clubs, apply to open calls, and track your profile. |
| **Club Head** | Scoped dashboard for a specific club (choose from the adjacent dropdown). Create events, manage submissions, and handle inductions. |
| **Admin** | Platform-wide control panel. See all clubs, detect scheduling conflicts, and manage council leadership. |

The **Reset Demo Data** button (top-right) wipes localStorage and restores the original seed data — handy after a demo session.

---

## File Structure

```
hbtu-manch/
├── index.html          # App shell — layout, topbar, sidebar, modal, toast
├── styles.css          # Full terracotta editorial design system
├── app.js              # Data layer + UI layer (vanilla JS, no frameworks)
├── manifest.json       # Web App Manifest (PWA metadata)
├── service-worker.js   # Offline caching — Cache-First + Network-First
└── icons/
    ├── icon-192.png    # PWA icon (192 × 192)
    └── icon-512.png    # PWA icon (512 × 512)
```

---

## Tech Stack

**HTML5 · CSS3 · Vanilla JavaScript · localStorage · Progressive Web App (PWA)**

No frameworks, no build tools, no package manager. The entire app is plain HTML/CSS/JS and runs in any modern browser.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Terracotta | `#C2410C` | Primary accent, CTAs, active states |
| Deep Terracotta | `#9A3412` | Hover states, pressed buttons |
| Warm Cream | `#FBF9F5` | App background |
| Parchment | `#F5F0E8` | Card surfaces |
| Warm Border | `#DFD7C8` | Dividers, input borders |
| Ink | `#1C1917` | Primary text |
| Muted | `#78716C` | Secondary / caption text |
| Sage Accent | `#4D7C6F` | Success, confirmed states |

---

## License

MIT — free to use, fork, and adapt for any HBTU student project.
