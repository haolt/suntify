import React from "react";
import { Modal, Button, Row, Col, Typography, List, Icon } from 'antd';
const { Title, Text } = Typography
const data = [
  'No credit card, ever',
  'Get unlimited podcasts',
  'Play your favorite music, with ads'
];

export default class SModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showModal}
          style={{
            background: 'transparent',
            color: '#fff',
            border: 'none',
            outline: 'none',
            textAlign: 'left',
            paddingLeft: '1.7em',
            width: '100%',
          }}
        >
          <Icon type="pic-right" />
            <span>Your library</span>
        </Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          closable={false}
        >
          <Row>
            <Col sm={24} md={12}>
              <Title level={3}>Get the most out of Spotify with a free account</Title>
              <List
                size="nomal"
                dataSource={data}
                renderItem={item => <List.Item><Icon type="check" />{item}</List.Item>}
              />
            </Col>
            <Col sm={24} md={12}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'initial',
                textAlign: 'center',
                height: '100%',
              }}
            >
                <Button shape="round" size="large">
                  Signup
                </Button>
                <hr />
                <Text>Already have an account?</Text>
                <Button type="primary" shape="round" size="large">
                  Login
                </Button>
              </div>
            </Col>
          </Row>
          <button onClick={this.handleCancel}>Close</button>
        </Modal>
      </div>
    );
  }
}
