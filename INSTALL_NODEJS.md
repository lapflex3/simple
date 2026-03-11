# 🔧 PETUNJUK INSTALASI NODE.JS

## Windows - Cara Termudah

### Opsi 1: Download Direct
1. Buka https://nodejs.org/
2. Download versi LTS (Long Term Support) - recommended untuk production
3. Jalankan installer (.msi file)
4. Ikuti installation wizard, klik "Next" untuk semua options
5. Restart computer

### Opsi 2: Menggunakan Chocolatey (untuk Windows power users)
```powershell
# Buka PowerShell sebagai Administrator
choco install nodejs
```

### Opsi 3: Menggunakan Windows Package Manager
```powershell
winget install OpenJS.NodeJS
```

---

## Verify Installation

Buka Command Prompt atau PowerShell dan jalankan:

```bash
node --version
npm --version
```

Jika nampak versi numbers, installation successful! ✅

---

## Selepas Node.js Installed

### 1. Pasang Dependencies
```bash
cd c:\Users\Razif\Documents\GitHub\aiapp.nasadef.com.my
npm install
```

### 2. Jalankan Server
```bash
npm start
```

### 3. Buka Browser
```
http://localhost:3000
```

---

## Problem Solving

### "npm not recognized after installation"
- Restart PowerShell/Command Prompt
- Atau restart computer

### "Port 3000 already in use"
Gunakan port berbeza:
```bash
$env:PORT=3001; npm start
```

---

Selamat! Anda kini siap untuk develop aplikasi Node.js! 🚀
