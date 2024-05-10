const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Handle POST requests to upload images or videos
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // You can save additional data to a database here if needed

    res.send('File uploaded successfully.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// // // Fetch cultural content data from the server

// // fetch('/api/content')
// //   .then(response => response.json())
// //   .then(data => {
//     const contentList = document.getElementById('content-list');

// //     // Create and append content elements to the content list
// //     data.forEach(item => {
// //       const categoryElement = document.createElement('div');
// //       categoryElement.classList.add('category');

// //       const titleElement = document.createElement('h2');
// //       titleElement.textContent = item.category;

// //       const descriptionElement = document.createElement('h3');
// //       descriptionElement.textContent = item.title;

// //       const detailsElement = document.createElement('p');
// //       detailsElement.textContent = item.description;

// //       categoryElement.appendChild(titleElement);
// //       categoryElement.appendChild(descriptionElement);
// //       categoryElement.appendChild(detailsElement);

// //       contentList.appendChild(categoryElement);
// //     });
// //   })
// //   .catch(error => {
// //     console.error('Error fetching cultural content:', error);
// //   });




