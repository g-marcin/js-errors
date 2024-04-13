const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const cors = require('cors');
const path = require('path');

app.use(cors())
  app.get('/', (req, res)=>{
    res.header('content-type', 'text/html')
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  })

  app.get('/api/main', (req, res) => {
    res.header('content-type', 'application/javascript')
    res.sendFile(path.join(__dirname, '../dist/bundle.js'));
  });

  app.get('/api/global', (req, res) => {
    res.header('content-type', 'text/css')
    res.sendFile(path.join(__dirname, '../dist/global.css'));
  });


app.listen(port, () => {
  console.log(`Mock server listening at http://localhost:${port}`);
});