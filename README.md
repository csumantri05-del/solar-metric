# Solar Metric by BSB Group

Kalkulator perencanaan PLTS (panel surya, inverter, baterai) dengan import Excel.
Satu paket untuk **Android (APK)** dan **iPhone (Web App)**.

| Folder | Isi |
|---|---|
| `web/` | Web App (PWA) - bisa dipasang di iPhone & Android, jalan offline |
| `app/` + file Gradle | Proyek aplikasi Android (APK) |
| `.github/workflows/` | Otomatis build APK + publikasi web app |

---

## Unduh APK Android
Setiap perubahan di cabang `main` otomatis membuat APK baru (±5 menit) di halaman **Releases**:
- Rilis terbaru: `https://github.com/<username>/solar-metric/releases/latest`
- Link langsung APK: `https://github.com/<username>/solar-metric/releases/latest/download/SolarMetric-BSB.apk`

Saat memasang APK di HP, izinkan "Instal dari sumber tidak dikenal".
Untuk iPhone, gunakan versi web (lihat Cara 2).

Untuk mengubah tampilan/rumus, edit `web/index.html` lalu commit ke `main`.

## CARA 2: Hanya web app, tanpa akun GitHub (Netlify Drop)
1. Buka https://app.netlify.com/drop
2. Seret folder `web` ke halaman itu → dapat link `https://xxxx.netlify.app`.
3. Pasang di HP seperti langkah di atas. (Cara ini tidak membuat file APK.)

## CARA 3: Build APK sendiri dengan Android Studio
File → Open → pilih folder ini → Build → Build APK(s).

---

## Tentang App Store (iPhone)
iPhone tidak bisa memasang file APK. Agar muncul di App Store diperlukan akun
Apple Developer (USD 99/tahun) dan Mac dengan Xcode. Setelah web app online,
paket iOS dapat dibuat dari link tersebut lewat https://www.pwabuilder.com.
Untuk penggunaan internal tim/klien, Web App (Tambahkan ke Layar Utama) sudah cukup.

## Fitur
- Perhitungan panel, inverter, baterai (rumus Solar Metric V7)
- Analisis biaya & BEP: tarif PLN per golongan, investasi, hemat per bulan, ROI, grafik arus kas 25 tahun
- Import Excel (.xlsx/.csv) + template Excel (`web/Template_SolarMetric_BSB.xlsx`)
- Cetak / simpan PDF laporan, bagikan ringkasan
- Data tersimpan otomatis, berjalan offline
