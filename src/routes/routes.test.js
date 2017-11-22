import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {shallow} from 'enzyme';
import Routes from './routes';

describe('Routes', () => {
  it('should render', () => {
    const wrapper = shallow(<BrowserRouter><Routes /></BrowserRouter>);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
