import React, { Component } from 'react';
import { Icon, Progress, Slider } from 'antd';

class SongControls extends Component {
  render() {
    return (
      <div className="song-controls" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="play-controls">
          <div className="play-controls__actions">
            <Icon type="column-height" />
            <Icon type="step-backward" />
            {/* <Icon type="pause-circle" theme="filled" /> */}
            <Icon type="play-circle" theme="filled" />
            <Icon type="step-forward" />
            <Icon type="retweet" />
          </div>
          <div className="play-controls__progress">
            <Progress percent={50} status="active" showInfo={false} />
          </div>
        </div>
        <div className="volume-control"
           style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'baseline',
              right: 0,
          }}
        >
          <Icon type="sound" />
          <Slider defaultValue={30} style={{ minWidth: '120px' }}/>
        </div>
      </div>
    );
  }
}

export default SongControls;