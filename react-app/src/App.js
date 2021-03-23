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
import { authenticate } from "./services/auth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  if (!authenticated) {
    console.log("test");
    return (
      <Switch>
        <Route path="/" exact={true}>
          <SplashPage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/signup" exact={true}>
          <SignupPage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    return (
      <BrowserRouter>
        <NavBar setAuthenticated={setAuthenticated} />
        <Switch>
          <Route path="/login" exact={true}>
            <LoginPage
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <ProtectedRoute
            path="/users"
            exact={true}
            authenticated={authenticated}
          >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute
            path="/users/:userId"
            exact={true}
            authenticated={authenticated}
          >
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
