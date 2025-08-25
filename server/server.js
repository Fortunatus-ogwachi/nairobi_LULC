import express from "express";
import pkg from "pg";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Pool } = pkg;
const app = express();
const port = 5000;

app.use(cors());

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, '..', 'client')));
// Serve static files from the 'data' directory
app.use('/data', express.static(path.join(__dirname, '..', 'data')));


// Configure the database connection pool
const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "nairobi_lulc",
  password: "myfortunatus",
  port: 5432,
});

// Root endpoint to confirm the server is running
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// Endpoint to get LULC statistics for a specific year
app.get("/api/lulc/statistics/:year", async (req, res) => {
  const { year } = req.params;
  const areaColumn = `area_${year}`;

  try {
    const result = await pool.query(`SELECT class_name, ${areaColumn} FROM lulc_classes ORDER BY value`);
    res.json(result.rows);
  } catch (err) {
    console.error(`Error fetching statistics for ${year}:`, err);
    res.status(500).json({ error: `Database query failed for year ${year}` });
  }
});

// Endpoint to get LULC change statistics
app.get("/api/lulc/change", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM lulc_classes ORDER BY value"); 
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching change statistics:", err);
    res.status(500).json({ error: "Database query failed for change statistics" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});