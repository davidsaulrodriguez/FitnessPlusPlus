require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
/**
 * TODO: require routes and feed them into the server
 */

app.use(helmet());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is listening on: ${PORT} - http://localhost:${PORT}`);
});
