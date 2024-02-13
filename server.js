// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (images in this case)
app.use(express.static('images'));

// Endpoint to encode images to Base64 JSON
app.get('/encode', (req, res) => {
    // Assuming you have an image named 'example.jpg' in the 'images' folder
    const imagePath = path.join(__dirname, 'images', '1200px-Adult_Scottish_Fold.jpg');
    const image = fs.readFileSync(imagePath);

    // Convert the image to Base64
    const base64Image = Buffer.from(image).toString('base64');

    // Send the Base64 data as JSON
    res.json({ base64Image });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
