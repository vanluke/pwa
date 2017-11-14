import {createEpicMiddleware} from 'redux-observable';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'reducer';
import rootEpic from 'epic';
import timeswireService from 'timeswire/services';
import en from './dev-tools';

const composeEnhancers = en();

const loggerMiddleware = createLogger();
export const dependencies = {
  timeswireService,
};

export const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies,
});

const createStoreWithMiddleware = () =>
  createStore(rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware, loggerMiddleware)),
  );

export default function configureStore() {
  return createStoreWithMiddleware();
}
