import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;

export default class MyHeader extends React.Component {
  state = {};

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div>
        <Header
          style={{
            background: "#fff",
            padding: 0
          }}
        >
          <Icon
            className="trigger"
            type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.toggle}
          />
        </Header>
      </div>
    );
  }
}
