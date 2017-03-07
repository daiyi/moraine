import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import * as actions from 'actions/actions'

export class Editor extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      text: 'hello txt'
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({text: nextProps.text});
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  render() {
    const { text } = this.state

    return (
      <div className="content">
        <textarea
          onChange={this.handleChange.bind(this)}
          value={text}>
        </textarea>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {text: state.text};
}

const ConnectedEditor = connect(mapStateToProps, actions)(Editor)
export default ConnectedEditor
