import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'reducers/reducer'

import App from 'components/App';

const generateTree = () => {
  let tree = {
    0: {
      id: 0,
      counter: 0,
      childIds: []
    }
  }

  for (let i = 1; i < 10; i++) {
    let parentId = Math.floor(Math.pow(Math.random(), 2) * i)
    tree[i] = {
      id: i,
      counter: 0,
      childIds: []
    }
    tree[parentId].childIds.push(i)
  }

  return tree;
}

const tree = generateTree()
const store = createStore(reducer, tree)
const rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
