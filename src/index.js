import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'

import reducer from './reducer'
import './config'

const store= createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

function render(){
    ReactDOM.render(<App a={'store'} />, document.getElementById('root'));
}

ReactDOM.render(
    (
        <Provider store={store}>
        <BrowserRouter> 
        </BrowserRouter>
        </Provider>,
        document.getElementById('root')  
    )
)
