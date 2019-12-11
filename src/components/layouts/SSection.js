import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Layout, Button } from 'antd';
const { Title } = Typography;
const { Header } = Layout;

const SSection = ({title, subtitle, seemoreURL, children}) => (
  <Layout
    style={{
      margin: '0',
      padding: '0',
      background: 'transparent',
      color: '#fff',
    }}
  >
    <Header
      style={{
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between',
        background: 'transparent',
        color: '#fff',
      }}
    >
      {/* <div> 
        { subtitle && <Text style={{ color: '#fff' }}>{subtitle}</Text>}
      </div> */}
      <Title
        level={2}
        style={{ color: '#fff' }}
      >
        {title}
      </Title>
      <Link to="/all">
        <Button type="link" >See all</Button>
      </Link>
    </Header>
    {children}
  </Layout>
);

export default SSection;