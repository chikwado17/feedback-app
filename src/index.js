import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';





const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, rootEl);
}

if(module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render);
  })
}

render();