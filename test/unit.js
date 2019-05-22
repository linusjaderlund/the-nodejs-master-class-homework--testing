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

test['lib.randomString should throw error if length is undefined'] = (done) => {
  assert.throws(lib.randomString);
  done();
};

test['lib.batman should return truthy value'] = (done) => {
  assert.ok(lib.batman());
  done();
};

test['lib.batman should return Batman theme music'] = (done) => {
  assert.equal(lib.batman(), 'NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman');
  done();
};

module.exports = test;