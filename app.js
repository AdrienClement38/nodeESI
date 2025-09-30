// app.js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Pool de connexions
const pool = new Pool({
    host: process.env.DB_HOST || 'database',
    port: 5432,
    user: 'postgres',
    password: process.env.DB_PASSWORD || 'secret',
    database: 'testdb'
});

// Route de santé simple
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Test de connexion à la DB
app.get('/db-test', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({
            success: true,
            time: result.rows[0].now
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
