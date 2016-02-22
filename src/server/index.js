const System = require('systemjs');
require('../../config.js');

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app = express();

// Set static assets root
app.use(express.static('.'));

app.get('/', (req, res) => {
  System.import('./src/shared/components/Card/Card').then((content) => {
    console.log('loaded on server');
    const Content = content.default;
    // Render the component to a string
    return ReactDOMServer.renderToString(<Content title="Hello" />);
  }).then((result) => {
    // Send the rendered page to the client
    const html = `
    <!doctype html>
    <html>
      <head>
      <title>Universal React with SystemJS/jspm</title>
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="320"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
      </head>
      <body>

        <div id="app">${result}</div>

        <script src="/jspm_packages/system.js"></script>
        <script src="/config.js"></script>
        <script>
          System.import('/src/client/index');
        </script>
      </body>
    </html>
  `;
  res.end(html);
  }).catch((error) => {
    setTimeout(() => {
      throw error;
    }, 0);
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
