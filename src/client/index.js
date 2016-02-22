'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

System.import('./src/shared/components/Card/Card').then((content) => {
  console.log('loaded in browser');
  const Content = content.default;
  return ReactDOM.render(
    <Content title="Hello" />,
    document.getElementById('app')
  );
});
