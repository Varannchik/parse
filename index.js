const needle = require("needle");
const cheerio = require("cheerio");

const url = "https://www.work.ua/jobs-kyiv-it/?advs=1"

    needle.get(url,function(err,res){
    if(err) throw(err);    
    const $ = cheerio.load(res.body);    
    console.log($(".add-bottom-sm").text());    
    
    });
