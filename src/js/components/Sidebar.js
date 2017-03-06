import React, { Component } from 'react'
import SidebarHeader from 'components/SidebarHeader';
import FileTree from 'components/FileTree';

class Sidebar extends Component {
  
  render() {
    return (
      <div className="sidebar">
        <SidebarHeader />
        <FileTree />
      </div>
    );
  }
}

export default Sidebar
