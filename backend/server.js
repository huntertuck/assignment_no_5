const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configure database connection
const dbConfig = {
  user: 'huntertuck',
  password: 'Regpeel1!',
  server: 'coop-db.database.windows.net',
  database: 'Authors',
  options: {
    encrypt: true, // For Azure
  },
};

sql.connect(dbConfig, (err) => {
  if (err) console.error("Database connection failed:", err);
  else console.log("Database connected successfully.");
});

// API route
app.get('/authors', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM Authors');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Serve Angular static files
app.use(express.static(path.join(__dirname, '../dist/pubs_page')));

// Catch-all route to serve Angular index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/pubs_page/browser/index.html'));
});

const PORT = 4200
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
