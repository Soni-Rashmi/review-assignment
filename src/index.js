import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import {routes} from './routes';

import './assets/styles/style.scss';
// import './assets/images/logo.png';
// import './assets/images/fb.png';
// import './assets/images/twitter.png';
// import './assets/images/favicon.ico';

ReactDOM.render(
    <BrowserRouter>
      {routes}
    </BrowserRouter>,
  document.getElementById('root')
);
