const fs = require('fs');
const cv = require('opencv4nodejs');
const base64 = require('base64-js');

// Read the JSON file
const data = JSON.parse(fs.readFileSync('/app/server-encodeDecode/json/imageData.json', 'utf-8'));

console.log(data);

const images = data.base64Image;

// Add padding if needed to make the length a multiple of 4
let paddedBase64String = images;
while (paddedBase64String.length % 4 !== 0) {
    paddedBase64String += '=';
}

// Decode Base64 to binary data
const decodedImage = base64.toByteArray(paddedBase64String);

// Convert binary data to Buffer
const buffer = Buffer.from(decodedImage);

// Convert Buffer to Uint8Array
const uint8Array = new Uint8Array(buffer);

// Decode image using OpenCV
const image = cv.imdecode(uint8Array);

// Save the decoded image
cv.imwrite('/app/server-encodeDecode/output/decodedCat.jpg', image);

console.log('done');
