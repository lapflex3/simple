# Razif - Interactive Node.js Web Application

Sebuah aplikasi web interaktif yang dibina dengan Node.js dan Express.

## Fitur

- 🎯 **Ucapan Selamat Datang** - Dapatkan ucapan personal
- 🧮 **Kalkulator Interaktif** - Kira operasi matematik
- 🕐 **Waktu Semasa** - Lihat waktu dan tarikh terkini
- 📱 **Responsive Design** - Boleh diakses dari mana-mana peranti

## Persyaratan

- Node.js 14 atau lebih tinggi
- npm atau yarn

## Pemasangan & Menjalankan di Lokal

```bash
# Clone repository
git clone https://github.com/yourusername/razif-interactive-app.git
cd razif-interactive-app

# Pasang dependencies
npm install

# Jalankan server
npm start
```

Server akan berjalan di `http://localhost:3000`

## API Endpoints

### GET /api/greeting
Dapatkan ucapan personal

**Query Parameters:**
- `name` (optional) - Nama anda (default: "Razif")

**Response:**
```json
{
  "message": "Selamat datang, Anda!",
  "timestamp": "2026-03-12T10:30:00.000Z"
}
```

### POST /api/calculate
Lakukan kira-kira matematik

**Body:**
```json
{
  "num1": 10,
  "num2": 5,
  "operation": "add"
}
```

**Operasi yang disokong:**
- `add` - Tambah
- `subtract` - Tolak
- `multiply` - Darab
- `divide` - Bahagi

**Response:**
```json
{
  "operation": "add",
  "num1": 10,
  "num2": 5,
  "result": 15,
  "timestamp": "2026-03-12T10:30:00.000Z"
}
```

### GET /api/time
Dapatkan waktu semasa

**Response:**
```json
{
  "time": "10:30:45 AM",
  "date": "12/3/2026",
  "timestamp": "2026-03-12T10:30:45.000Z"
}
```

## Deployment Otomatis

Projek ini telah dikonfigurasi dengan GitHub Actions untuk auto-deployment ke FTP server.

### Setup GitHub Secrets

1. Pergi ke Settings repository GitHub Anda
2. Buka "Secrets and variables" → "Actions"
3. Tambah secrets berikut:
   - `FTP_SERVER` - ftp.nasadef.com.my
   - `FTP_USERNAME` - razif@nasadef.com.my
   - `FTP_PASSWORD` - Nikrazif@1

### Deploy

Semua commits ke branch `main` atau `master` akan automatically di-deploy ke server FTP.

## Struktur Direktori

```
.
├── server.js           # Express server
├── package.json        # Dependencies
├── public/
│   └── index.html      # Frontend HTML
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions workflow
```

## Technology Stack

- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Deployment:** GitHub Actions + FTP

## Lesen

MIT

## Hubungan

Razif - razif@nasadef.com.my
