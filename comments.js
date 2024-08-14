// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Define comments array
const comments = [
  { username: 'Tammy', comment: 'lolol' },
  { username: 'FishBoi', comment: 'nice meme' },
  { username: 'PuppyLuvr', comment: 'omg cutest pup evr' }
];

// Define static folder
app.use(express.static('public'));

// Define route for comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});