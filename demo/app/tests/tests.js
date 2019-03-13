var NSYelpApi = require("nativescript-NSYelpApi").NSYelpApi;
let YOUR_API_KEY = require('../enviornment.js')

describe("greet function", function() {
    let api;
    beforeEach(() => {
        api = new NSYelpApi(YOUR_API_KEY);
    })
    it("exists", function() {
        expect(api).toBeDefined();
    });

    // it('Should get a business by id', () => {
        
    // })

});