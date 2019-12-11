import React from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Menu } from 'antd';
import routes from './home.routes';
import Features from '../Features/component';

const Home = () => {
  return (
    <>
      <Menu mode="horizontal" theme="dark">
        {
          routes.map(route => (
            <Menu.Item key={route.id}>
              <Link to={route.path}>{route.title}</Link>
            </Menu.Item>
          ) )
        }
      </Menu>
      <Switch>
        <Route path={`/browse/podcasts`}>
          podcasts
        </Route>
        <Route path={`/browse/genres`}>
          genres
        </Route>
        <Route path={`/browse/newreleases`}>
          newreleases
        </Route>
        <Route path={`/browse/discover`}>
          discover
        </Route>
        <Route exact path={`/`}>
          <Features />
        </Route>
        <Route exact path={`/features`}>
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        </Route>
        <Route exact path={`/browse`}>
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        </Route>
        <Route exact path={`/authenticated`}>
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        </Route>
      </Switch>
    </>
  );
}

export default Home;