const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API Routes
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'Razif';
  res.json({
    message: `Selamat datang, ${name}!`,
    timestamp: new Date().toISOString()
  });
});

app.post('/api/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  let result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num2 !== 0 ? num1 / num2 : 'Tak boleh bahagi dengan sifar';
      break;
    default:
      result = 'Operasi tidak dikenali';
  }

  res.json({
    operation,
    num1,
    num2,
    result,
    timestamp: new Date().toISOString()
  });
});

app.get('/api/time', (req, res) => {
  const now = new Date();
  res.json({
    time: now.toLocaleTimeString('ms-MY'),
    date: now.toLocaleDateString('ms-MY'),
    timestamp: now.toISOString()
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Sesuatu berlaku salah!',
    message: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
