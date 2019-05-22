// deps
const http = require('http');

// app
const app = {}

// app init script
app.init = (callback) => {
  http
    .createServer((req, res) => {
      console.log(req);
      res.end();
    })
    .listen(4000, () => {
      if (typeof callback === 'function') {
        callback();
      }
    });
};

if (process.mainModule === module) {
  app.init();
}

module.exports = app;