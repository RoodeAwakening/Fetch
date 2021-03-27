import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SplashPage from './components/SplashPage/SplashPage'
import SignupPage from './components//SignupPage/SignupPage'
import FeedPage from './components/FeedPage/FeedPage'
import ComingSoon from './components/ComingSoon'
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/auth/ProtectedRoute'
import UsersList from './components/UsersList'
import User from './components/User'
import Modal from './components/Modal/Modal'

import * as sessionActions from './store/session'
import PostPage from './components/PostPage/PostPage'

function App() {
	const dispatch = useDispatch()
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setLoaded(true))
	}, [dispatch])

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
						<Route path="/comingsoon" exact={true}>
							<ComingSoon />
						</Route>
						<div>
							<NavBar />
							<ProtectedRoute path="/feed" exact={true}>
								<FeedPage />
							</ProtectedRoute>
							<ProtectedRoute path="/posts/:postId" exact={true}>
								<PostPage />
							</ProtectedRoute>
							<Route path="/users" exact={true}>
								<UsersList />
							</Route>
							<Route path="/users/:userId" exact={true}>
								<User />
							</Route>
							<Route path="/modal" exact={true}>
								<Modal />
							</Route>
						</div>
					</Switch>
				</BrowserRouter>
			)}
		</>
	)
}
// }

export default App
