import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SplashPage from "./components/SplashPage/SplashPage";
import SignupPage from "./components/SignupPage";
import FeedPage from "./components/FeedPage/FeedPage";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { useSelector } from "react-redux";
import { authenticate } from "./services/auth";

function App() {
  const [loaded, setLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  if (!sessionUser) {
    return (
      <Switch>
        <Route path="/" exact={true}>
          <SplashPage />
        </Route>
        <Route path="/signup" exact={true}>
          <SignupPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
          <ProtectedRoute path="/users" exact={true}>
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true}>
            <User />
          </ProtectedRoute>
          <Route path="/feed" exact={true}>
            <FeedPage />
          </Route>

          {/* <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
            <h1>My Home Page</h1>
          </ProtectedRoute> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
