import { createStore, compose, combineReducers } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({})

const store = createStore(reducers, composeEnhancers())

window.store = this
export default store
