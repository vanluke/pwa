import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import {Observable} from 'rxjs/Observable';
import {loadTimeswire, initState} from 'timeswire/state';
import Timeswire from './timeswire';

describe('Timeswire', () => {
  const dependencies = {
    timeswireService: {
      getTimeswire: () => Observable.of([{
        title: 'title',
        section: 'section',
        abstract: 'abstract',
        multimedia: [],
        thumbnailStandard: 'image.png',
        createdDate: '',
        byline: 'byline',
      }]),
    },
  };
  const epicMiddleware = createEpicMiddleware(combineEpics(
    loadTimeswire,
  ), {dependencies});
  const mockStore = configureMockStore([epicMiddleware]);
  let store = mockStore({
    timeswire: {
      ...initState,
      timeswires: [],
    },
  });

  beforeEach(() => {
    store = mockStore({
      timeswire: {
        ...initState,
        timeswires: [],
      },
    });
  });

  afterEach(() => {
    epicMiddleware.replaceEpic(loadTimeswire);
  });

  const Connect = () => (<Provider store={store}><Timeswire /></Provider>);

  it('should render', () => {
    const wrapper = shallow(<Connect />);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should gets state', () => {
    mount(<Connect />);

    const {timeswire} = store.getState();
    expect(timeswire).toEqual({
      ...initState,
      timeswires: [],
    });
  });
});
