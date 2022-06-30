import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";

import {reducer} from './modules/memos'

// Goal for today is to connect this front end to a back end
// add the ability for redux to handle asynchronous actions
// add to our code some asynchronous actions that will talk to a backend (which does not exist yet)

// middleware - redux has a chain of execution

const asyncMiddleware = storeAPI => next => action => {
    if (typeof action === 'function')
        return action(storeAPI.dispatch, storeAPI.getState)

    next(action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(asyncMiddleware)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
