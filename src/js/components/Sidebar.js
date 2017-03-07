import React, { Component } from 'react'
import SidebarHeader from 'components/SidebarHeader';
import SidebarContent from 'components/SidebarContent';

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <SidebarHeader />
        <SidebarContent />
      </div>
    );
  }
}

export default Sidebar
