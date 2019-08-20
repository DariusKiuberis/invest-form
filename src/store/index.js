import { createStore, compose, combineReducers } from 'redux'
import reduser from './reduser'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({ reduser })

const store = createStore(reducers, composeEnhancers())

window.store = this
export default store
