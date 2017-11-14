import React from 'react';
import {Switch, Route} from 'react-router';
import Root from 'components/root';
import Home from 'home';
import Timesware from 'timeswire';

const Routes = () => (
  <Root>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/news" component={Timesware} />
    </Switch>
  </Root>
);

export default Routes;
