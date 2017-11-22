import {
  LOAD_TIMESWIRE,
  LOAD_TIMESWIRE_SUCCESS,
  LOAD_TIMESWIRE_ERROR,
} from './timeswire-constants';
import reducer, {initState} from './timeswire-reducer';

describe('Timeswire reducer', () => {
  it('should handle default state', () => {
    const actual = reducer(undefined, {});

    expect(initState).toEqual(actual);
  });

  it('should handle LOAD_TIMESWIRE', () => {
    const action = {
      type: LOAD_TIMESWIRE,
    };

    const actual = reducer(initState, action);
    expect({
      ...initState,
      isBussy: true,
    }).toEqual(actual);
  });

  it('should handle LOAD_TIMESWIRE_SUCCESS', () => {
    const action = {
      type: LOAD_TIMESWIRE_SUCCESS,
      payload: {
        timeswires: [],
      },
    };

    const actual = reducer(initState, action);
    expect({
      ...initState,
      isBussy: false,
      timeswires: [],
    }).toEqual(actual);
  });

  it('should handle LOAD_TIMESWIRE_ERROR', () => {
    const action = {
      type: LOAD_TIMESWIRE_ERROR,
      payload: {
        error: {},
      },
    };

    const actual = reducer(initState, action);
    expect({
      ...initState,
      isBussy: false,
      error: {},
    }).toEqual(actual);
  });
});
