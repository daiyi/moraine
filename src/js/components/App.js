import React, { Component } from 'react'
import Content from 'components/Content'
import Sidebar from 'components/Sidebar'

class App extends Component {

  render() {
    return (
      <div className="page">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App
