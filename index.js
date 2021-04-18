const cheerio = require("cheerio");
const axios = require("axios");
// var scraped_data = await axios.get("https://books.toscrape.com/");
var scraped_data = "<h1>Hello</h1>";
const $ = cheerio.load("https://bryantobin.com");
// var name = $(".page_inner").first().find("a").text();
console.log(scraped_data);
