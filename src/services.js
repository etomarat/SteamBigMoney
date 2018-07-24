const request = require('superagent')
const parse = require('./parser').parseAssets

const getHistory = (page, count=global.settings.queryMaxSize) => {
    return request.get(global.settings.marketHistoryUrl)
        .set('Cookie', `steamLogin=${global.settings.steamLoginCookie};`)
        .query({ 
            start: (page * count) || 0,
            count: count
        })
        .then(res => {
            const result = {...res.body}
            const html = result.results_html
            delete result.assets
            delete result.hovers
            delete result.results_html
            result.assets = parse(html)
            return result;
        })
        .catch(err => {
            console.error(err);
        })
}

module.exports = {
    getHistory
}