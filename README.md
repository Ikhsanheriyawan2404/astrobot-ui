# Asisten Bot Telegram — Astro + PWA

> Landing page untuk bot Telegram yang ngeblast cuaca BMKG, pengingat sholat, reminder todo, dan pengingat harian. Sudah PWA, bisa di-install, dan siap deploy ke Docker atau Cloudflare Pages.

## ✨ Fitur
- ⚡️ Astro 5 + @vite-pwa/astro (offline, installable)
- 🎨 Sketch-style UI dengan font Inter + Patrick Hand
- 📦 Docker multi-stage (Node builder → Nginx Alpine)
- ☁️ Cloudflare Pages + Wrangler config siap jalan

## 🔧 Prasyarat
- Node.js 20+
- npm 9+
- (Opsional) Docker & Docker Compose
- (Opsional) Cloudflare account + Wrangler CLI

## 🧑‍💻 Setup Lokal
```bash
# install deps
npm install

# jalankan dev server
npm run dev
# buka http://localhost:4321

# build produksi + preview
npm run build
npm run preview
```

## 🐳 Deploy via Docker
```bash
# build & run (foreground)
docker compose up --build

# run background
docker compose up -d --build

# stop
docker compose down
```
Image final ~70 MB (Nginx Alpine). Config tersedia di `Dockerfile` + `docker-compose.yml` dan `nginx.conf`.

## ☁️ Deploy ke Cloudflare Pages (Wrangler)
Konfigurasi ada di `wrangler.toml` (build: `npm run build`, output: `dist`).

```bash
# login Cloudflare
npx wrangler login

# build Astro + deploy ke Pages
npm run build
npx wrangler pages deploy ./dist
```

Ganti `production_branch` atau `name` di `wrangler.toml` kalau perlu.

## 📱 PWA Notes
- Manifest & service worker otomatis dari @vite-pwa/astro
- Icons: `public/pwa-192x192.png`, `public/pwa-512x512.png`
- Meta tags PWA ada di `src/layouts/Layout.astro`

## 📂 Struktur Ringkas
```text
/public       # favicon, PWA icons, manifest via plugin
/src          # layout + halaman landing
Dockerfile    # multi-stage build
nginx.conf    # config prod
wrangler.toml # Cloudflare Pages deploy
```
