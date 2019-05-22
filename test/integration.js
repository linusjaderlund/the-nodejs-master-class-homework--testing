// deps
const assert = require('assert');
const app = require('../app/index');

// test object
const test = {};

test['app.init should start http server without throwing'] = (done) => {
  assert.doesNotThrow(() => {
    app.init(done);
  });
};

module.exports = test;