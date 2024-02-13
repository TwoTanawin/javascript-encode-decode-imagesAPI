// client.js
const axios = require('axios');
const cv = require('opencv4nodejs');
const fs = require('fs');

async function getImage() {
    try {
        const response = await axios.get('http://localhost:3000/encode');
        const data = response.data;

        fs.writeFileSync('json/imageData.json', JSON.stringify(data));

        // Decode Base64 to create a Buffer
        const base64Image = Buffer.from(data.base64Image, 'base64');

        // Convert Base64 data to Mat
        const mat = cv.imdecode(base64Image);

        // Write the Mat as an image file
        cv.imwrite('/app/server-encodeDecode/output/decoded_image.jpg', mat);

        console.log('Image decoded and saved as decoded_image.jpg');
    } catch (error) {
        console.error('Error:', error);
    }
}

getImage();
