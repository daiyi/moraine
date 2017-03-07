import React, { Component } from 'react'
import File from 'components/File'
import FileTree from 'components/FileTree';

class SidebarContent extends Component {

  render() {
    return (
      <div className="sidebar-content">
        <FileTree />
      </div>
    );
  }
}

export default SidebarContent
