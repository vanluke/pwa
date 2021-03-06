import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Routes from 'routes';
import store from 'store';

render((<Provider store={store}>
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
</Provider>), document.getElementById('container'));
