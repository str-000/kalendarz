import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Footer from './components/footer'
import Content from './components/content'

ReactDOM.render(
  <React.StrictMode>
    <Content/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);