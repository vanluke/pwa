import React from 'react';
import {render} from 'react-dom';
// import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Routes from 'routes';

render((<BrowserRouter>
  <Routes />
</BrowserRouter>), document.getElementById('container'));