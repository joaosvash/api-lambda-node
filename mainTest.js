const should = require("should");
const request = require("request");
const expect = require("chai").expect;
const baseUrl = "https://swapi.py4e.com/api";
const baseUrl2 = "https://l9962dabr7.execute-api.us-west-2.amazonaws.com/swapi/api";

const util = require("util");

describe('retornar Actor C-3PO', function() {
    it('retornar Actor C-3PO', function(done) {
        request.get({ url: baseUrl + '/people/2' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.name).to.equal("C-3PO");
            		expect(bodyObj.hair_color).to.equal("n/a");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
});

describe('guardar Actor', function() {
    it('guardar Actor', function(done) {
        request.post({ url: baseUrl2 + '/people' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.name).to.equal("Luke Skywalker");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
});


