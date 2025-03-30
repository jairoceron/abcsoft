
const assert = require('chai').assert;
const app = require('../app_00');

describe('App', function() {
    it(' DE LO OTRO ... ______ app should return hello', function() {
        assert.equal(app(),'hello');
    });
});

