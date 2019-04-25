import React from "react";
import { Layout, Menu, Icon } from "antd";
import "antd/dist/antd.css";
import "./admin.less";

import MyHeader from "./components/Header";
import MyMenu from "./components/NavLeft";

const { Header, Sider, Content } = Layout;

export default class Admin extends React.Component {
  state = {
    collapsed: false
  };

  //将子组件的点击事件传回给了父组件
  handleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout className="main">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <MyMenu />
        </Sider>
        <Layout>
          <MyHeader
            collapsed={this.state.collapsed}
            toggle={this.handleToggle}
          />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
