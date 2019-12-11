import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { Empty, Button, Typography, Icon, Menu } from 'antd';
import { bindActionCreators, compose } from 'redux';
import { deleteToken } from '../../actions/tokenActions';
import options from './account.options';
const { Title, Text } = Typography;

const Account = ({deleteToken, history}) => {
  const doLogout = () => {
    deleteToken();
    history.push('/');
  }
  return (
    <Empty
      image={null}
      description={
        <>
          <Icon type="user"
            style={{
              fontSize: '7em',
            }}
          />
          <Title level={3} style={{ color: '#fff' }}>Hao Le</Title>
          <Menu
            theme="dark"
            mode="inline"
            style={{ background: 'transparent', color: '#fff' }}
          >
            {
              options.map(option => (
                <Menu.Item>
                  <Button shape="round" size="large">
                    <Link to={option.url} target="_blank">
                      {option.title}
                    </Link>
                  </Button>
                </Menu.Item>
              ))
            }
            <Menu.Item>
              <Button shape="round" size="large" onClick={ doLogout }>
                Logout
              </Button>
            </Menu.Item>
          </Menu>
          <ul style={{
            display: 'flex',
            justifyContent: 'center',
            listStyleType: 'none'
          }}>
            <li><Text style={{ color: '#fff', margin: '0 0.5em' }}>Legal</Text></li>|
            <li><Text style={{ color: '#fff', margin: '0 0.5em' }}>Privacy</Text></li>|
            <li><Text style={{ color: '#fff', margin: '0 0.5em' }}>Cookies</Text></li>|
            <li><Text style={{ color: '#fff', margin: '0 0.5em' }}>About Ads</Text></li>
          </ul>
          
        </>
      }
    >
      <Button type="primary">Create Now</Button>
    </Empty>
  )
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    deleteToken,
  }, dispatch);
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(Account);