import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadFile } from 'actions/actions'
import fs from 'fs';

class File extends Component {
  static propTypes = {
    children: PropTypes.string,
    handleClick: PropTypes.func
  }

  render() {
    const { children, handleClick } = this.props

    return (
      <li onClick={() => handleClick(children)}>
        {children}
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (filename) => {
      const filepath = "/home/daiyi/nets/moraine/data/" + filename

      fs.readFile(filepath, 'utf8', function (err, text) {
        if (err) {
          return console.log(err);
        }
        else {
          dispatch(loadFile(filepath, text));
        }
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(File)
