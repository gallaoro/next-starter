/* eslint no-underscore-dangle: 0 */

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import rootSaga from './saga';
import { rootReducer, exampleInitialState } from './reducer';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['count'], // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export function initializeStore(initialState = exampleInitialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedReducer,
    initialState,
    bindMiddleware([sagaMiddleware, logger]),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

export default (App) => (
  class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      // eslint-disable-next-line no-param-reassign
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  }
);
