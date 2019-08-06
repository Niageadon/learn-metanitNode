let assert = require("assert");
let operations = require("./operations");

it("should multiply two numbers", function(){

    let expected = 15;
    let result = operations.multiply(3, 5);
    assert.equal(result, expected);
});