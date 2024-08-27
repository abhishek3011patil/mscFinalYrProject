const express = require('express');
const axios = require('axios');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose')
const app = express();
app.use(cors()); // Enable CORS if needed
app.use(express.json());

app.use('/api', authRoutes);

mongoose.connect('mongodb+srv://abhishek3011patil:Abhi1289@cluster0.w1zwk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });


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
app.listen(5001, () => {
    console.log('Express server running on http://localhost:5001');
});
