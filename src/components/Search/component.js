import React from 'react';
import { Input, Empty, Typography } from 'antd';
const { Title, Text } = Typography;

const Search = () => (
  <>
    <Input
      placeholder="Start typing..."
      style={{
        border: 'none',
        outline: 'none',
        background: '#282828',
        color: '#fff',
        fontSize: '3em',
        padding: '1em',
      }}
    />
    <Empty
      image={null}
      description={
        <>
          <Title level={3} style={{ color: '#fff' }}>Search Spotify</Title>
          <Text style={{ color: '#fff' }}>Find your favorite songs, artists, albums, podcasts and playlists.</Text>
        </>
      }
    >
      {/* <Button type="primary">Create Now</Button> */}
    </Empty>
  </>
);

export default Search;