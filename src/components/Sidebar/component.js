import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import logo from '../../images/logo.PNG';
import SModal from '../SModal';

const { Sider } = Layout;

export default class Sidebar extends Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { isAuthenticated } = this.props;
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}
        style={{ background: '#030303' }}
      >
        <h1 style={{
          textAlign: 'center'
        }}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </h1>
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
          style={{
            color: '#fff',
            display: 'block',
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ background: '#030303', color: '#fff' }}
        >
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/search">
              <Icon type="search" />
              <span>Search</span>
            </Link>
          </Menu.Item>
          {isAuthenticated ? (
            <Menu.Item>
              <Link to="/collection">
                <Icon type="pic-right" />
                <span>Your library</span>
              </Link>
            </Menu.Item>
          ): <SModal /> }
        </Menu>
        <ul style={{
          margin: 0,
          padding: 0,
          listStyleType: 'none',
          color: '#fff',
          textAlign: 'center',
          position: 'absolute',
          bottom: '20%',
          width: '100%',
          left: '0',
          }}
        >
          <li>Cookie</li>
          <hr />
          <li>Privacy</li>
        </ul>
      </Sider>
    );
  }
}