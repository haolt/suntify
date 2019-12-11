import React from 'react';
import { Row, Col } from 'antd';
import PlaylistItem from '../PlaylistItem/component';
import playlists from '../../mockdata/playlists';
import '../../ant-custom/theme.less';

const Playlists = () => (
  <Row gutter={[16, 16]}>
    {playlists.length &&
      playlists.map(playlist => (
        <Col xs={24} sm={12} md={6} lg={4} key={playlist.id}>
          <PlaylistItem playlist={playlist} />
        </Col>
      ) )
    }
  </Row>
);

export default Playlists;
