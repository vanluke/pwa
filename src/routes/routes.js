import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import Root from 'components/root';
import Home from 'home';
import Timesware from 'timeswire';

const Routes = () => (
  <Root>
    <Switch>
      <Route path="/" component={Timesware} />
      <Route path="/home" component={Home} />
      <Route path="/news" component={Timesware} />
      <Redirect from="*" to="/news" />
    </Switch>
  </Root>
);

export default Routes;
