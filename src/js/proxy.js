const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const API = "https://newsapi.org/";
const API_VERSION = "v2";
const API_RESOURCE = "everything?";
const API_QUERY = "javascript, web";
const API_KEY = "edf3df56d9af43b3ab64e0effbbba0c9";

const API_ENDPOINT = `${API}/${API_VERSION}/${API_RESOURCE}q=${API_QUERY}&apiKey=${API_KEY}`;

app.get(API_ENDPOINT, (req, res) => {
  request(
    { url: API_ENDPOINT},
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app; 