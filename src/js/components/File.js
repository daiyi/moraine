import React, { Component, PropTypes } from 'react'

class File extends Component {
  static propTypes = {
    children: PropTypes.string
  }

  render() {
    const { children } = this.props

    return (
      <li>{children}</li>
    );
  }
}

export default File
