import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadFile } from 'actions/actions'
import fs from 'fs';

class SidebarHeader extends Component {
  handleSaveClick() {
    // sigh
    const text = document.querySelector('.editor').value;
    fs.writeFile(this.props.filepath, text, 'utf8', (err) => {
      if (err) {
        return console.log(err);
      }
    });
  }

  render() {
    let {handleLoadClick} = this.props;

    return (
      <header className="sidebar-header">
        <div className="nav">
            <ul>
              <li onClick={this.handleSaveClick.bind(this)}>
              <button type="button" id="save-file" className="save-file">
                <label htmlFor="save-file">save</label>
              </button>
              </li>
            </ul>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filepath: state.filepath
  }
}

export default connect(mapStateToProps)(SidebarHeader)
