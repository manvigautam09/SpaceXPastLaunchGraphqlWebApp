import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";

import rootSaga from "./saga";
import combineReducers from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
export default store;
