import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";

const SignIn = () => {
  return (
    <Switch>
      <Route path="/sign-in/login" component={Login} />
      <Route path="/sign-in/signup" component={SignUp} />
    </Switch>
  );
};

export default SignIn;
