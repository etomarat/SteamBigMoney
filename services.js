const request = require('superagent')
const parse = require('./parser').parseAssets
const requestWrapper = params => {
    return request.get(params.url)
        .set('Cookie', `steamLogin=${global.settings.steamLoginCookie};`)
        .query({ 
            start: params.start || 0,
            count: params.count || global.settings.queryMaxSize
        })
        .catch(err => {
            console.error(err);
        })
}

const getHistory = () => {
    return requestWrapper({
        url: global.settings.marketHistoryUrl
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
}

module.exports = {
    getHistory
}