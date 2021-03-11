'use strict';

const express = require('express');

const app = express();

// Serve it up hon
app.use(express.static('dist'))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;
