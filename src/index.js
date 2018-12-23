import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import reducer from './reducer'
import './config'
import './index.css'

const store= createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
    React.createElement(  
//     <Provider store={store}>
//     <BrowserRouter> 
//     <div>
//         <Route path='/login' component={Login}></Route>
//         <Route path='/register' component={Register}></Route>
//     </div>
//     </BrowserRouter>
// </Provider>)
<div>cheng</div>, document.getElementById('root')
    )
)
    

