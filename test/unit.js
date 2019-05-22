// deps
const assert = require('assert');
const lib = require('../app/lib');

// global
const deepObject = {
  test: 'test',
  '_0': [1, 2, 3, 4, '5', { falsy: true }],
  deep: {
    _test: 'hello',
    process: process.toString(),
    deeper: {
      arr: ['qwerty', 1, typeof [], 'test again'],
      int: 3254,
      str: 'end'
    }
  }
};

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

test['lib.getDeepObject should return deep object with specific values'] = (done) => {
  assert.deepStrictEqual(lib.getDeepObject(), deepObject);
  done();
};

test['lib.getDeepJSONObject should return deep JSON object with specific values'] = (done) => {
  assert.deepStrictEqual(JSON.parse(lib.getDeepJSONObject()), deepObject);
  done();
};

module.exports = test;