const assert = require('chai').assert;
const sayHello = require('../app').sayHello;  

describe('App', function () {
    it('sayHello should retun hello  2014', function () {
        let result = sayHello();
        console.log('por aqui pasa ... ');
        assert.equal(result, 'hello');
    });



    it('sayHello should return type string', function () {
        let resultX = app();
       // console.log(' testXX ___________ 00 ', resultX);
       //  let result = app(); // .sayHello();
       let result = sayHello();
        console.log(' testXX ___________ 01 ');
        console.log('que es lo que pasa con esto :: ' , result);
        assert.typeOf(result, 'string');
    });
});
