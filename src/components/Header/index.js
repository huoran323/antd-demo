import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;

export default class MyHeader extends React.Component {
  toggle = () => {};
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
            type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.toggle}
          />
        </Header>
      </div>
    );
  }
}
