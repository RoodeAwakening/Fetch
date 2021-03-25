import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SplashPage from "./components/SplashPage/SplashPage";
import SignupPage from "./components/SignupPage";
import FeedPage from "./components/FeedPage/FeedPage";
import PostPage from "./components/Post/Post";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { useSelector } from "react-redux";
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return (
    <>
      {loaded && (
        <BrowserRouter>
          {sessionUser && <NavBar />}
          <Switch>
            <Route path="/" exact={true}>
              <SplashPage />
            </Route>
            <Route path="/signup" exact={true}>
              <SignupPage />
            </Route>
            <ProtectedRoute path="/feed" exact={true}>
              <FeedPage />
            </ProtectedRoute>
            <Route path="/posts/:postId" exact={true}>
              <PostPage />
            </Route>
            <ProtectedRoute path="/users" exact={true}>
              <UsersList />
            </ProtectedRoute>
            <ProtectedRoute path="/users/:userId" exact={true}>
              <User />
            </ProtectedRoute>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
