const cheerio = require('cheerio');

const parseAssets = (html) => {
    const $ = cheerio.load(html)
    return [];
}

module.exports = {
    parseAssets
}