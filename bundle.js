var jspm = require('jspm');
var builder = new jspm.Builder();

// or builder.buildStatic
builder.bundle('./src/client/index.js', './dist/client/index.js', {
  minify: false,
  sourceMaps: true
}).then(function () {
  console.log('Build complete');
}).catch(function (err) {
  console.log('Build error: ', err);
});