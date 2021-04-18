const cheerio = require("cheerio");
const axios = require("axios");
axios.get("https://bryantobin.com").then(function (response) {
  let $ = cheerio.load(response.data);
  console.log($("#ssb").text());
});
