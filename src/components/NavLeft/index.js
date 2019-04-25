import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";

import MenuConfig from "./../../config/menuConfig.js";

const SubMenu = Menu.SubMenu;

export default class MyMenu extends Component {
  componentWillMount() {
    const menuTree = this.renderMenu(MenuConfig);
    this.setState({
      menuTree
    });
  }

  //列表菜单渲染
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        //添加这个参数为了列表页中的搜索列表不添加icon
        if (item.level === 1) {
          this.rootSubmenuKeys.push(item.key);
          return (
            <SubMenu
              key={item.key}
              title={
                <span>
                  <Icon type={item.type} />
                  {/* 此处的span控制缩进的时候不显示文字 */}
                  <span>{item.title}</span>
                </span>
              }
            >
              {this.renderMenu(item.children)}
            </SubMenu>
          );
        } else {
          return (
            <SubMenu key={item.key} title={item.title}>
              {this.renderMenu(item.children)}
            </SubMenu>
          );
        }
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  rootSubmenuKeys = [];

  state = {
    openKeys: []
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    return (
      <Menu
        theme="dark"
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
      >
        {this.state.menuTree}
      </Menu>
    );
  }
}
