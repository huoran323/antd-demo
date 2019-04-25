import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;

export default class MyHeader extends React.Component {
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
            onClick={() => {
              //点击事件时，将子组件的点击事件传回给父组件，点击操作在父组件的事件中进行操作
              this.props.toggle();
            }}
          />
        </Header>
      </div>
    );
  }
}
