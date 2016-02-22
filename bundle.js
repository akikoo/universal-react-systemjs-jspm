var Builder = require('jspm').Builder;

var builder = new Builder(
  './',         // baseURL
  './config.js' // configuration file
);

builder.bundle('./src/shared/components/Card/Card.js', './src/client/dist.js', {
  minify: false,
  sourceMaps: true
}).then(function () {
  console.log('Build complete');
}).catch(function (err) {
  console.log('Build error: ', err);
});
