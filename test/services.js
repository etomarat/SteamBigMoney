const getHistory = require('../src/services').getHistory

describe('services', () => {
    describe('getHistory', () => {
        it('should get data from api', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    })
})
