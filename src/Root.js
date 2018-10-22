import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';
import async from 'middlewares/async';
import validation from 'middlewares/validation';

export default ({children, initialState={}}) => {
    const store = createStore(reducers, initialState, applyMiddleware(async, validation));
    return <Provider store={store}>
                {children}
            </Provider>;
};