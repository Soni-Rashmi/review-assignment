import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import {routes} from './routes';

import './assets/styles/style.scss';

ReactDOM.render(
    <BrowserRouter>
      {routes}
    </BrowserRouter>,
  document.getElementById('root')
);
