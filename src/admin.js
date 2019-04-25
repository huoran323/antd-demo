import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./admin.less";

import MyHeader from "./components/Header";
import MyMenu from "./components/NavLeft";

const { Sider, Content } = Layout;

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
          <div className="logo">
            <a href="/">
              <img src="/assets/logo-ant.svg" alt="" />
              <h1>通用管理系统</h1>
            </a>
          </div>
          <MyMenu />
        </Sider>
        <Layout>
          <MyHeader
            collapsed={this.state.collapsed}
            toggle={this.handleToggle}
          />
          {this.props.children}
          {/* <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            Content
          </Content> */}
        </Layout>
      </Layout>
    );
  }
}
