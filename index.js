const fs = require('fs')

const settings = require('./settings.json');
const getHistory = require('./services').getHistory;

global.settings = {...settings}

getHistory().then(html => {
    fs.writeFile('./result.html', html, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    }); 
})
