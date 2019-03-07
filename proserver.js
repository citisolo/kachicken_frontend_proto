const express = require('express');
//const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
