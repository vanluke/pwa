import React from 'react';
import {shallow, mount} from 'enzyme';
import {StaticRouter} from 'react-router-dom';
import Timeswires from './timeswires';
import Timeswire from './timeswire';

describe('Timeswires', () => {
  const props = {
    timeswires: [{
      slugName: 'slugName',
      title: 'title',
      section: 'section',
      abstract: 'abstract',
      multimedia: [],
      thumbnailStandard: 'image.png',
      createdDate: '',
      byline: 'byline',
      url: '',
    }],
    isBussy: false,
  };

  it('should render', () => {
    const wrapper = shallow(<Timeswires {...props} />);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render props', () => {
    const wrapper = mount(<StaticRouter context={{}}>
      <Timeswires {...props} /></StaticRouter>).find(Timeswires);

    expect(wrapper.props()).toEqual(props);
  });

  it('should render Timeswire List', () => {
    const wrapper = shallow(<Timeswires {...props} />);

    expect(wrapper.find(Timeswire)).toHaveLength(props.timeswires.length);
  });
});
