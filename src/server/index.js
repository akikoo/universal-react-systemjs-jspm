import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import IndexPage from 'universal-react-systemjs-jspm'; // This is './src/client/index.js', as defined in jspm.config.js

const app = express();

// Set static assets root
app.use('/jspm_packages', express.static('jspm_packages'));
app.use('/src', express.static('src'));
app.use('/dist', express.static('dist'));
app.use('/jspm.config.js', express.static('jspm.config.js'));

app.get('/', (req, res) => {
  // Render the component to a string
  const pageHTML = ReactDOMServer.renderToString(React.createElement(IndexPage));

  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Universal React with SystemJS/jspm</title>
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="320"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="app">${pageHTML}</div>
        <script src="jspm_packages/system.js"></script>
        <script src="jspm.config.js"></script>
        <script>
          Promise.all([
            System.import('./src/client/index'),
            System.import('react-dom'),
            System.import('react')
          ]).then((results) => {
            const IndexPage = results[0].default;
            const ReactDOM = results[1];
            const React = results[2];
            ReactDOM.render(React.createElement(IndexPage), document.getElementById('app'));
          });
        </script>
      </body>
    </html>`;

  // Send the rendered page to the client
  res.send(html);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});