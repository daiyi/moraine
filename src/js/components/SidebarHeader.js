import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadFile } from 'actions/actions'
import fs from 'fs';

// todo
const filepath = "/home/daiyi/nets/moraine/data/notes.txt";

class SidebarHeader extends Component {

  render() {
    let {handleLoadClick} = this.props;

    return (
      <header className="sidebar-header">
        <div className="nav">
            <ul>
              <li onClick={handleLoadClick}>
              <button type="button" id="load-file" className="load-file">
                <label htmlFor="load-file">load</label>
              </button>
              </li>
              <li onClick={() => {
                  console.log("todo save");
                }}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadClick: () => {
      fs.readFile(filepath, 'utf8', function (err, text) {
        if (err) {
          return console.log(err);
        }
        else {
          console.log(text);
          dispatch(loadFile(filepath, text));
        }
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(SidebarHeader)
