# DKM Cakes & Cookies — Astro Site

## Menjalankan lokal
    npm install
    npm run dev

## Build production
    npm run build       # output ke folder dist/
    npm run preview     # preview hasil build

## Struktur konten
Semua konten yang bisa diubah tanpa sentuh kode ada di `src/data/`:
- `config.json`  → profil bisnis, alamat, jam buka, kontak, copy hero/about/testimoni
- `products.json` → daftar produk di grid "Koleksi Produk"

Tambah/hapus produk cukup edit `products.json` (tambah/hapus object di array).
Ganti alamat, nomor WA, atau jam buka cukup edit `config.json` — otomatis
ikut update di section Kontak DAN di structured data (JSON-LD) untuk SEO.

## Deploy ke GitHub Pages
1. Push repo ini ke GitHub.
2. Di repo Settings → Pages → Source, pilih "GitHub Actions".
3. Workflow di `.github/workflows/deploy.yml` akan build & deploy otomatis
   setiap push ke branch `main`.
4. File `public/CNAME` sudah diisi `dkmcakes.com` — kalau domainnya beda
   atau belum ada custom domain, edit/hapus file itu (dan sesuaikan
   `site` di `astro.config.mjs`, tambah `base: "/nama-repo"` kalau
   deploy ke `username.github.io/nama-repo` tanpa custom domain).
