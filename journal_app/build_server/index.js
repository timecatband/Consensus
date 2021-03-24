'use strict';

const express = require('express');

const app = express();

// Serve it up hon
app.use(express.static('dist'))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

/*
  This should address when you try to load directly onto path which is
  handled by the client side react router
  https://ui.dev/react-router-cannot-get-url-refresh/
*/
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

module.exports = app;
