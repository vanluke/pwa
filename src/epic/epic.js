import {combineEpics} from 'redux-observable';
import {loadTimeswire} from 'timeswire/state';

export default combineEpics(
  loadTimeswire,
);
