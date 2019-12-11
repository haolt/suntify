import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from './components/Sidebar';
import SongControls from './components/SongControls/component';
import SHeader from './components/SHeader/component';
import Home from './components/Home/component';
import Search from './components/Search/component';
import CollectionRO from './components/CollectionRO/component';
import PlaylistRO from './components/PlaylistRO/component';
import Account from './components/Account/component';
import PrivateRoute from './components/PrivateRoute';
import { Layout } from 'antd';
import './ant-custom/theme.less';
const { Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout style={{
        height: '100vh'
      }} >
        <Sidebar />
        <Layout
          style={{
            margin: '0',
            padding: '0',
            background: '#121212',
            color: '#fff',
            minHeight: 50,
            position: 'relative',
          }}
        >
          <SHeader />
          <Content style={{ padding: '0' }}>
            <Switch>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/playlist">
                <PlaylistRO />
              </Route>
              <PrivateRoute path="/collection">
                <CollectionRO />
              </PrivateRoute>
              <Route path={`/settings/account`}>
                <Account />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/authenticated">
                <Redirect
                  to={{
                    pathname: "/",
                  }}
                />
              </Route>
          </Switch>
          </Content>
        </Layout>
        <Footer 
          style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            zIndex: 3,
            background: '#fff'
          }}
        >
          <SongControls />
        </Footer>
      </Layout>
    );
  }
}

export default App;