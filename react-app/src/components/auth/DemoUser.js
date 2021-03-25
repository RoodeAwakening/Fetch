import React from 'react'
import { useHistory } from 'react-router-dom'
import * as sessionActions from '../../store/session'
import { useDispatch } from 'react-redux'
import './auth.css'

const LoginForm = () => {
	let history = useHistory()
	const dispatch = useDispatch()

	const setDemoLogin = e => {
		e.preventDefault()
		const email = 'demo@aa.io'
		const password = 'password'
		dispatch(sessionActions.loginThunk({ email, password }))
		history.push('/feed')
	}

	// THIS IS OLD CODE THAT USES THE SETAUTHENTICATE
	// const setDemoLogin = async (e) => {
	//   e.preventDefault();
	//   const email = "demo@aa.io";
	//   const password = "password";
	//   const user = await login(email, password);
	//   setAuthenticated(true);
	//   console.log('auth',setAuthenticated);
	//   history.push('/feed')

	// };

	return (
		<form onSubmit={setDemoLogin}>
			<button type="submit" id="loginButtonTrue">
				Demo Login
			</button>
		</form>
	)
}

export default LoginForm
