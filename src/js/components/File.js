import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadFile } from 'actions/actions'
import fs from 'fs';

class File extends Component {

  static propTypes = {
    children: PropTypes.string,
    handleClick: PropTypes.func,
    selected: PropTypes.bool
  }

  render() {
    const { children, handleClick, selected } = this.props
    const classes = selected? "file-selected" : ""

    return (
      <li className={classes} onClick={() => handleClick(children)}>
        {children}
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {selected: (state.filename == ownProps.children)}
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
          dispatch(loadFile(filename, filepath, text));
        }
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(File)
