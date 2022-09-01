import React from "react";
import { Route } from "react-router-dom";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <Route
        children={({ location }) => {
          return !["/"].includes(location.pathname) ? <MainNavigation /> : null;
        }}
      />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
