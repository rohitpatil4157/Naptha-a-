const express = require('express');
const app = express()
const port = 8000 || 3000;

function keepalive() {
  app.all('/', (req, res) => {
    res.end("Your account again started!")
  });

}

app.listen(port, () => {
  console.log("Let's go again!")
})

module.exports = keepalive;