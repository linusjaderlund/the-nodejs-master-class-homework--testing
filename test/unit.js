// deps
const assert = require('assert');
const lib = require('../app/lib');

// test object
const test = {};

test['lib.randomString should return random string of specified length'] = (done) => {
  const length = 20;
  const str = lib.randomString(length);
  assert.equal(str.length, length);
  done();
};

module.exports = test;