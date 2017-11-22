import {mapToReducer} from 'redux0-helpers';
import Immutable from 'seamless-immutable';
import {
  LOAD_TIMESWIRE,
  LOAD_TIMESWIRE_SUCCESS,
  LOAD_TIMESWIRE_ERROR,
} from './timeswire-constants';

export const initState = Immutable({
  isBussy: false,
  timeswires: [],
});

export default mapToReducer({
  [LOAD_TIMESWIRE]: state => state.set('isBussy', true),
  [LOAD_TIMESWIRE_SUCCESS]: (state, {payload}) => state.set('isBussy', false).set('timeswires', payload.timeswires),
  [LOAD_TIMESWIRE_ERROR]: (state, {payload}) => state.set('isBussy', false).set('error', payload.error),
})(initState);
