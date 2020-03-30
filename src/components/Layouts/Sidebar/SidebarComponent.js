import React from "react";
import Sidebar from "react-sidebar";
import SidebarContent from './SidebarContent';
class SidebarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.sidebarStyle = {
      width: "70px",
      height: "100%",
      borderRight: "2px solid",
      borderColor: "rgba(243, 244, 249, 1)",
      margin: "auto",
      backgroundColor: "white",
      position: 'fixed',
      overflowX: "hidden",
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  
  render() {
    return (
      <Sidebar
        sidebar={<SidebarContent />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: this.sidebarStyle }}
      >
        <button 
          className="btn-sidebar" 
          onClick={() => this.onSetSidebarOpen(true)} />
      </Sidebar>
    );
  }
}

export default SidebarComponent;