import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Typography } from 'antd';
import { setToken } from '../../actions/tokenActions';
import { CLIENT_ID, REDIRECT_URI } from '../../constants/API';
const { Text } = Typography;

class AuthBtns extends Component {
  doLogin() {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${REDIRECT_URI}`;
  }

  componentDidMount() {
    let hashParams = {};
    let r = /([^&;=]+)=?([^&;]*)/g;
    // 1 "#access_token=BQC51k8be7Oy6PGSsWinP-7XnvktzK5RHvUjFNem3-A62iHi4JFXYKDrxVLaSb3f3wHe64FcM6ywxsag9ENnB1Ylt0AUUrfe-XGmxQPPYsFCYtAacB2w9S96iQWQEGDlq-S9hGS7IqBNO7jOjl5HOSE6eF191hLsfcM56xCsDx6VNx0S50ruPVYqu8GDxln2hu6Uurs3qU-lj8M5RQFpuCobQ-AVtrjRl2qEWDeBbUBXUggf70pfIr9NeDykZbhAOVy8_-p2eXn3g0sg02aPIxvnVGTLUIc&token_type=Bearer&expires_in=3600"
    const hash = window.location.hash.substring(1);
    // 2 "access_token=BQC51k8be7Oy6PGSsWinP-7XnvktzK5RHvUjFNem3-A62iHi4JFXYKDrxVLaSb3f3wHe64FcM6ywxsag9ENnB1Ylt0AUUrfe-XGmxQPPYsFCYtAacB2w9S96iQWQEGDlq-S9hGS7IqBNO7jOjl5HOSE6eF191hLsfcM56xCsDx6VNx0S50ruPVYqu8GDxln2hu6Uurs3qU-lj8M5RQFpuCobQ-AVtrjRl2qEWDeBbUBXUggf70pfIr9NeDykZbhAOVy8_-p2eXn3g0sg02aPIxvnVGTLUIc&token_type=Bearer&expires_in=3600"
    let e = r.exec(hash);
    /* 3
    [
      "access_token=BQC51k8be7Oy6PGSsWinP-7XnvktzK5RHvUjFNem3-A62iHi4JFXYKDrxVLaSb3f3wHe64FcM6ywxsag9ENnB1Ylt0AUUrfe-XGmxQPPYsFCYtAacB2w9S96iQWQEGDlq-S9hGS7IqBNO7jOjl5HOSE6eF191hLsfcM56xCsDx6VNx0S50ruPVYqu8GDxln2hu6Uurs3qU-lj8M5RQFpuCobQ-AVtrjRl2qEWDeBbUBXUggf70pfIr9NeDykZbhAOVy8_-p2eXn3g0sg02aPIxvnVGTLUIc",
      "access_token", "BQC51k8be7Oy6PGSsWinP-7XnvktzK5RHvUjFNem3-A62iHi4JFXYKDrxVLaSb3f3wHe64FcM6ywxsag9ENnB1Ylt0AUUrfe-XGmxQPPYsFCYtAacB2w9S96iQWQEGDlq-S9hGS7IqBNO7jOjl5HOSE6eF191hLsfcM56xCsDx6VNx0S50ruPVYqu8GDxln2hu6Uurs3qU-lj8M5RQFpuCobQ-AVtrjRl2qEWDeBbUBXUggf70pfIr9NeDykZbhAOVy8_-p2eXn3g0sg02aPIxvnVGTLUIc"]
    */
	  if (e) {
      // console.log('e: ', e);
      hashParams[e[1]] = decodeURIComponent(e[2]);
      // 4 hashParams.access_token = "BQC51k8be7Oy6PGSsWinP...p2eXn3g0sg02aPIxvnVGTLUIc"
      this.props.setToken(hashParams[e[1]]);
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        {isAuthenticated ? (
          <>
            <Button shape="round" size="large">
              <Link to="https://www.spotify.com/vn-vi/premium/" target="_blank">
                Upgrade
              </Link>
            </Button>
            <Button type="primary" shape="round" size="large"
            >
              <Link to="settings/account">
                <Icon type="user" />
                <Text>Hao Le</Text>
              </Link>
            </Button>
          </>
        ) : (
          <>
            <Button shape="round" size="large">
              Signup
            </Button>
            <Button type="primary" shape="round" size="large"
              onClick={this.doLogin}
            >
              Login
            </Button>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    isAuthenticated: state.tokenReducer.isAuthenticated,
  }
);

const mapDispatchToProps = dispatch => {
  // return {
  //   setToken: token => dispatch(setToken(token)),
  // };
  return bindActionCreators({
    setToken,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthBtns);