const cheerio = require("cheerio");
const axios = require("axios");
var b = axios.get("https://bryantobin.com").then(function (response) {
  console.log(response.data);
});
