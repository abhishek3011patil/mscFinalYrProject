const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS if needed
app.use(express.json());

// Endpoint to get song recommendations
app.get('/recommend/:songName', async (req, res) => {
    try {
        const { songName } = req.params;
        const response = await axios.get(`http://localhost:5000/get-songName/${encodeURIComponent(songName)}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching song recommendations');
    }
});

// Endpoint to get all songs
app.get('/songs', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:5000/get-songs');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching songs');
    }
});

// Run Express server
app.listen(3000, () => {
    console.log('Express server running on http://localhost:3000');
});
