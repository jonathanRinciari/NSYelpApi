var NSYelpApi = require("nativescript-NSYelpApi").NSYelpApi;
var nSYelpApi = new NSYelpApi();

describe("greet function", function() {
    it("exists", function() {
        expect(nSYelpApi.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(nSYelpApi.greet()).toEqual("Hello, NS");
    });
});