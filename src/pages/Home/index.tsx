import React from "react";
import { Switch, Route } from "react-router-dom";

import DashBoard from "./Dashboard";
import Profile from "./Profile";

const Home = () => {
  return (
    <Switch>
      <Route path="/home/dashboard" component={DashBoard} />
      <Route path="/home/profile" component={Profile} />
    </Switch>
  );
};

export default Home;
