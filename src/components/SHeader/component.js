import React, { Component } from 'react';
// import { connect } from 'react-redux';
import HistoryOptions from '../HistoryOptions/component';
import AuthBtns from '../AuthBtns/component';
import { Layout } from 'antd';

const { Header } = Layout;

class SHeader extends Component {
  render() {
    return (
      <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            background: '#0c0c0ce6',
            right: 0,
            display: 'flex',
            justifyContent: 'space-between'
          }}
      >
        <HistoryOptions />
        <AuthBtns />
      </Header>
    );
  }
}
export default SHeader;