// React imports
import React from 'react';

// Vendor Imports
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

// Partials
import Nav from 'components/Partials/Nav.jsx';
import Sidebar from 'components/Partials/Sidebar.jsx';

// Application components
import Home from 'components/Home';
import Login from 'components/Login';

// App routes
import { login } from 'routes/pathname';

export const Router = props => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <div>
        {/* Top Navigation and Header component */}
        <Nav {...props} />

        {/* Application wise sidebar */}
        <Sidebar {...props} />
        <div className="app-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row"> </div>
            <div className="content-body">
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path={login} component={Login} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </ConnectedRouter>
  );
};
