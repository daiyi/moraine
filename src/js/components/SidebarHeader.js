import React, { Component } from 'react'

class SidebarHeader extends Component {

  render() {
    return (
      <header className="sidebar-header">
        <div className="nav">
            <ul>
              <li>
                <input type="file" id="select-file" className="select-file"/>
                <label htmlFor="select-file">load</label>
              </li>
              <li>
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

export default SidebarHeader
