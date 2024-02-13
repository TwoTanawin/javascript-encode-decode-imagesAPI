const fs = require('fs');

// Path to your JSON file
const filePath = '/app/server-encodeDecode/json/imageData.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse JSON data
    const jsonData = JSON.parse(data);
    
    // Do something with the JSON data
    // console.log(jsonData); 
    console.log(jsonData.base64Image); // specific topic
});
