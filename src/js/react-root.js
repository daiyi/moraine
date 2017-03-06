import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const store = createStore(() => {})
const rootEl = document.getElementById('content')

const render = () => ReactDOM.render(
  <textarea id="editor" defaultValue="hello react"></textarea>,
  rootEl
)

render()
store.subscribe(render)
