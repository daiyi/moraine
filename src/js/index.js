import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from 'components/App';

const store = createStore(() => {})
const rootEl = document.getElementById('app')

const render = () => ReactDOM.render(
  <App />,
  rootEl
)

render()
store.subscribe(render)
