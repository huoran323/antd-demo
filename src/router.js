import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";
import Admin from "./admin";
import Analysis from "./pages/dashboard/analysis";

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Switch>
                    <Route path="/Dashboard/analysis" component={Analysis} />
                  </Switch>
                </Admin>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
