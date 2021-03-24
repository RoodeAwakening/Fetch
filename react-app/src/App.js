import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SplashPage from "./components/SplashPage/SplashPage";
import SignupPage from "./components//SignupPage/SignupPage";
import FeedPage from "./components/FeedPage/FeedPage";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { useSelector } from "react-redux";
import { authenticate } from "./services/auth";
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setLoaded(true));
  }, [dispatch, loaded]);



  
    return (
      <>
      {loaded && (
      <BrowserRouter>
      
        <Switch>
        <Route path="/" exact={true}>
          <SplashPage />
        </Route>
        <Route path="/signup" exact={true}>
          <SignupPage />
        </Route>
        <div>
        <NavBar />
          <ProtectedRoute path="/feed" exact={true}>
            <FeedPage />
          </ProtectedRoute>
          <Route path="/users" exact={true}>
            <UsersList />
          </Route>
          <Route path="/users/:userId" exact={true}>
            <User />
          </Route>
          </div>
        </Switch>
      </BrowserRouter>
      )}
    </>
    );
  }
// }

export default App;
