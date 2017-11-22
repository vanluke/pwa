import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {createAction} from 'redux0-helpers';
import {
  LOAD_TIMESWIRE,
  LOAD_TIMESWIRE_SUCCESS,
  LOAD_TIMESWIRE_ERROR,
} from './timeswire-constants';

export const loadTimeswireStart = createAction(LOAD_TIMESWIRE);
export const loadTimeswireSuccess = createAction(LOAD_TIMESWIRE_SUCCESS);
export const loadTimeswireError = createAction(LOAD_TIMESWIRE_ERROR);

export const loadTimeswire = (action$, store, {timeswireService}) =>
  action$.ofType(LOAD_TIMESWIRE)
    .mergeMap(() => timeswireService.getTimeswire()
      .map(timeswires => loadTimeswireSuccess({timeswires}))
      .catch(error => Observable.of(loadTimeswireError({
        error,
      }))));
