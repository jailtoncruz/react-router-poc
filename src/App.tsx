import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import("./pages/SignIn"));

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Teste</h1>
          <Link to="/home/dashboard">DashBoard</Link>
          <Link to="/home/profile">Profile</Link>
          <Link to="/sign-in/login">login</Link>
          <Link to="/sign-in/signup">SignUp</Link>
        </header>
        <div className="outlet">
          <Route path="/" exact>
            <Redirect to="/sign-in" />
          </Route>
          <Route
            path="/Home"
            component={() => (
              <Suspense fallback={<p>Loading</p>}>
                <Home />
              </Suspense>
            )}
          />
          <Route
            path="/sign-in"
            component={() => (
              <Suspense fallback={<p>Loading</p>}>
                <SignIn />
              </Suspense>
            )}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
