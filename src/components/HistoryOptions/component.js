import React, { Component } from 'react';
import { Button } from 'antd';

class HistoryOptions extends Component {
  render() {
    return (
      <div>
        <Button type="primary" shape="circle" icon="left" />
        <Button type="primary" shape="circle" icon="right" />
      </div>
    );
  }
}

export default HistoryOptions;