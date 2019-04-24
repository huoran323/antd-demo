import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";
import Admin from "./admin";

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Admin />
        </App>
      </HashRouter>
    );
  }
}
