import React from "react";
import { Layout, Menu, Icon } from "antd";
import "antd/dist/antd.css";
import "./admin.less";

import MyHeader from "./components/Header";

const { Header, Sider, Content } = Layout;

export default class Admin extends React.Component {
  //   state = {
  //     collapsed: false
  //   };

  //   handleToggle = () => {
  //     this.setState({
  //       collapsed: !this.state.collapsed
  //     });
  //   };

  render() {
    return (
      <Layout className="main">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
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
