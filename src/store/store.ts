import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { Cats } from "./ducs/Cats/contracts/CatsStructure";
import { RootReducer } from "./reducer";
import rootSaga from "./saga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMidleWere = createSagaMiddleware();


export interface RootState {
  Cats:Cats;
}

export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(sagaMidleWere)));

sagaMidleWere.run(rootSaga);