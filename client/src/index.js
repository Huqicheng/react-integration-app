import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

ReactDOM.render(
    <Provider store={createStore(reducers, {
        auth: {authenticated: localStorage.getItem('token')}
    }, applyMiddleware(reduxThunk))}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} /> 
                <Route path="/signup" exact component={Signup} /> 
                <Route path="/feature" exact component={Feature} /> 
                <Route path="/signout" exact component={Signout} /> 
                <Route path="/signin" exact component={Signin} /> 
            </App>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
