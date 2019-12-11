import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import { Menu } from 'antd';
import routes from './collection.routes';

const Collection = () => {
  let {
    path,
    // url
  } = useRouteMatch();
  return (
  <>
    <Menu mode="horizontal" theme="dark">
      {
        routes.map(route => (
          <Menu.Item key={route.id}>
            <Link to={`/collection${route.path}`}>{route.title}</Link>
          </Menu.Item>
        ))
      }
    </Menu>
    <Switch>
      <Route exact path="/collection">
        <Redirect
          to={`/collection/playlists`}
        />
      </Route>
      <Route path={`${path}/playlists`}>
        playlists
      </Route>
      <Route path={`${path}/made-for-you`}>
        made-for-you
      </Route>
      <Route path={`${path}/tracks`}>
        tracks
      </Route>
      <Route path={`${path}/albums`}>
        albums
      </Route>
      <Route path={`${path}/artists`}>
        artists
      </Route>
      <Route path={`${path}/podcasts`}>
        podcasts
      </Route>
    </Switch>
  </>
)};

export default Collection;