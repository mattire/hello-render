const express = require('express');
const app = express();

// Render provides the PORT env variable
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(`Get req port ${PORT}`);
  res.send('Hello World from Render!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
