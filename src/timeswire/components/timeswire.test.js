import React from 'react';
import {shallow, mount} from 'enzyme';
import {StaticRouter} from 'react-router-dom';
import Timeswire from './timeswire';
import {
  Picture,
  Category,
  Title,
} from './timeswire.styled';

describe('Timeswire', () => {
  const props = {
    title: 'title',
    section: 'section',
    abstract: 'abstract',
    multimedia: [],
    thumbnailStandard: 'image.png',
    createdDate: '',
    byline: 'byline',
    url: '',
  };

  it('should render', () => {
    const wrapper = shallow(<Timeswire {...props} />);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render props', () => {
    const wrapper = mount(<StaticRouter context={{}}>
      <Timeswire {...props} /></StaticRouter>).find(Timeswire);

    expect(wrapper.props()).toEqual(props);
  });

  describe('should render required elements', () => {
    const wrapper = shallow(<Timeswire {...props} />);
    it('should render picture', () => expect(wrapper.find(Picture)).toHaveLength(1));
    it('should render category', () => expect(wrapper.find(Category)).toHaveLength(1));
    it('should render title', () => expect(wrapper.find(Title)).toHaveLength(1));
  });
});
