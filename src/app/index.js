import './sharedStyles/styles.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { MainContainer } from 'containers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import lang from 'redux/modules/lang'

const store = createStore(lang, window.devToolsExtension ? window.devToolsExtension() : (f)=> f)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('app')
)
