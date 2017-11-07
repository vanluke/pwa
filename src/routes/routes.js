import React from 'react';
import {Switch, Route} from 'react-router';
import Root from 'components/root';
import Home from 'home';

const Routes = () => (
  <Root>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
    </Switch>
  </Root>
);

export default Routes;
