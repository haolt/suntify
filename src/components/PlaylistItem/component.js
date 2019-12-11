import React from 'react';
import { Link } from "react-router-dom";
import { Card, Typography, Icon } from 'antd';
const { Title, Text } = Typography;

const PlaylistItem = ({playlist}) => (
  <Link to={`/playlist/${playlist.id}`}>
    <Card
      hoverable
      style={{
        padding: 20,
        background: '#272727',
        border: 0,
        color: '#fff',
      }}
      className="playlist-item"
      cover={<img alt="example" src={playlist.thumnail} />}
    >
      {/* <Meta
        title={playlist.title}
        description={playlist.description}
        style={{
          color: '#fff',
        }}
      /> */}
      <Title level={3} style={{
        color: '#fff'
      }}>{playlist.title}</Title>
      <Text>{playlist.description}</Text>
      <Icon type="caret-right"
        style={{
          position: 'absolute',
          bottom: '0.5em',
          right: '0.5em',
          fontSize: '1.5em',
          background: '#1DB954',
          color: '#fff',
          borderRadius: '50%',
          padding: '0.5em',
        }}
      />
      {/* <Icon type="play-circle" theme="filled"
        style={{
          position: 'absolute',
          bottom: '0.5em',
          right: '0.5em',
          fontSize: '2.5em',
          background: '#1DB954',
          color: '#fff',
        }}
        className="playlist-item__play"
      /> */}
    </Card>
  </Link>
);

export default PlaylistItem;