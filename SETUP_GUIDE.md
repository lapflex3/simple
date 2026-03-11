# 🚀 PANDUAN SETUP LENGKAP - RAZIF INTERACTIVE APP

## 1️⃣ SETUP LOKAL & TESTING

### Langkah 1: Pasang Dependencies

```bash
cd c:\Users\Razif\Documents\GitHub\aiapp.nasadef.com.my
npm install
```

### Langkah 2: Jalankan Server Lokal

```bash
npm start
```

Server akan berjalan di: http://localhost:3000

Anda boleh:
- Masuk nama dan dapatkan ucapan
- Guna kalkulator interaktif
- Lihat waktu semasa

---

## 2️⃣ SETUP GITHUB

### Langkah 1: Buat Repository Baru di GitHub

1. Pergi ke https://github.com/new
2. Repository Name: `aiapp.nasadef.com.my` (atau nama lain pilihan anda)
3. Pilih "Public" atau "Private"
4. JANGAN pilih "Initialize this repository with..."
5. Klik "Create repository"

Setelah dibuat, anda akan lihat instructions. Salin URL repository (contoh: `https://github.com/yourusername/aiapp.nasadef.com.my.git`)

### Langkah 2: Initialize Git Lokal & Push ke GitHub

```bash
cd c:\Users\Razif\Documents\GitHub\aiapp.nasadef.com.my

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Razif interactive app"

# Add remote repository (gantikan dengan URL anda)
git remote add origin https://github.com/yourusername/aiapp.nasadef.com.my.git

# Rename branch to main (jika perlu)
git branch -M main

# Push ke GitHub
git push -u origin main
```

---

## 3️⃣ SETUP GITHUB SECRETS (UNTUK AUTO-DEPLOYMENT)

### Langkah 1: Pergi ke GitHub Repository Settings

1. Buka repository anda di GitHub
2. Klik tab "Settings"
3. Pilih "Secrets and variables" → "Actions" (di sidebar kiri)

### Langkah 2: Tambah Secrets Berikut

**Secret 1: FTP_SERVER**
- Name: `FTP_SERVER`
- Value: `ftp.nasadef.com.my`
- Klik "Add secret"

**Secret 2: FTP_USERNAME**
- Name: `FTP_USERNAME`
- Value: `razif@nasadef.com.my`
- Klik "Add secret"

**Secret 3: FTP_PASSWORD**
- Name: `FTP_PASSWORD`
- Value: `Nikrazif@1`
- Klik "Add secret"

✅ Selepas ini, anda akan nampak 3 secrets di halaman Actions secrets.

---

## 4️⃣ SETUP WORKFLOW DEPLOYMENT

Workflow sudah disediakan dalam file `.github/workflows/deploy.yml`

Workflow akan:
1. Trigger apabila anda push ke branch `main` atau `master`
2. Setup Node.js environment
3. Pasang npm dependencies
4. Upload semua files ke FTP server

---

## 5️⃣ CARA MENGGUNAKAN

### Local Development & Testing

```bash
# Jalankan server
npm start

# Buka browser: http://localhost:3000
```

### Push Code & Auto-Deploy

```bash
# Buat perubahan pada files

# Stage changes
git add .

# Commit
git commit -m "Deskripsi perubahan anda"

# Push ke GitHub (ini akan trigger auto-deployment)
git push origin main
```

### Check Deployment Status

1. Pergi ke repository GitHub anda
2. Klik tab "Actions"
3. Anda akan lihat workflow sedang dijalankan atau completed
4. Klik workflow untuk melihat details
5. Setelah "Deploy to FTP Server" completed, files akan ada di server FTP

---

## 6️⃣ TEST PRODUCTION

Setelah deployment successful:

Pergi ke: https://aiapp.nasadef.com.my

Aplikasi anda boleh sekarang diakses di URL produksi!

---

## 7️⃣ TROUBLESHOOTING

### ❌ "npm: command not found"
**Solusi:** Pasang Node.js dari https://nodejs.org/

### ❌ GitHub Actions deployment gagal
1. Klik tab "Actions" di GitHub
2. Klik failed workflow
3. Lihat logs untuk error message
4. Common issues:
   - Secrets tidak set dengan betul
   - FTP credentials tidak betul
   - Firewall blocking FTP connection

### ❌ Tak boleh connect ke FTP server
1. Pastikan FTP credentials betul:
   - Server: ftp.nasadef.com.my
   - Username: razif@nasadef.com.my
   - Password: Nikrazif@1
   - Port: 21

2. Pastikan server FTP status aktif

3. Anda boleh test FTP connection guna tool seperti FileZilla

---

## 8️⃣ STRUKTUR PROJEK AKHIR

```
aiapp.nasadef.com.my/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── public/
│   └── index.html              # Frontend interactive app
├── server.js                   # Express server
├── package.json                # Dependencies & scripts
├── .gitignore                  # Git ignore rules
└── README.md                   # Documentation
```

---

## ✅ CHECKLIST COMPLETION

- [ ] npm install - dependencies installed
- [ ] npm start - tested locally at http://localhost:3000
- [ ] GitHub repository created
- [ ] git push - pushed ke GitHub successfully
- [ ] GitHub Secrets added (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
- [ ] GitHub Actions workflow running successfully
- [ ] Files deployed ke FTP server
- [ ] https://aiapp.nasadef.com.my accessible

---

## 📞 NEXT STEPS

1. **Customize:** Edit `public/index.html` untuk add lebih banyak features
2. **Backend:** Tambah more API endpoints di `server.js`
3. **Database:** Integrate database (MongoDB, PostgreSQL, etc.) kalau perlu
4. **Authentication:** Tambah user authentication kalau perlu
5. **Monitoring:** Setup monitoring & logging untuk production

---

Selamat! Aplikasi Razif anda sudah live! 🎉
