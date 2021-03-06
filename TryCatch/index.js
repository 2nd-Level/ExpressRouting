require('dotenv').config()
const express = require('express'); //express package import
const server = require('./server'); 


const port =process.env.PORT || 8000;

server.listen(port, () =>
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
);