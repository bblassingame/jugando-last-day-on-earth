import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import 'babel-polyfill'
import AppContainer from './app-container'
import RootReducer from './app-reducer'

let store

/*global process*/
if (process.env.NODE_ENV !== 'production') {
  console.log('Dev Environment Detected:  Starting Application')
  store = createStore(RootReducer, applyMiddleware(thunkMiddleware, createLogger()))
}
else {
  store = createStore(RootReducer, applyMiddleware(thunkMiddleware))
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>, document.getElementById('main')
)