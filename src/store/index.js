import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reduser from './reduser'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({ reduser })

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

window.store = this
export default store
