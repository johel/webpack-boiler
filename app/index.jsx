import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <Header />,
  document.getElementById('app')
);
