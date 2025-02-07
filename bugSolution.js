const express = require('express');
const app = express();
let port = 3000;

function startServer() {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying a different port`);
      port++;
      startServer(); // Retry with the next port
    } else {
      console.error(err);
    }
  });
}

startServer();