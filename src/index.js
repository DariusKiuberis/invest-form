import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../src/store/index'
import Layout from '../src/layout/Content/Content'

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
