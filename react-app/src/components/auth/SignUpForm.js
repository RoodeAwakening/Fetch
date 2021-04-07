import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router'
import { signup } from '../../store/session'

const SignUpForm = ({ authenticated, setAuthenticated }) => {
	const [userName, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [profilePhoto, setProfilePhoto] = useState('')
	// const [errors, setErrors] = useState([]);  //!not being used
	// const [image, setImage] = useState(null);  //!not being used
	// const [imageLoading, setImageLoading] = useState(false);  //!not being used

	let history = useHistory()
	const dispatch = useDispatch()

	const sessionUser = useSelector(state => state.session.user)

	const onSignUp = async e => {
		e.preventDefault()
		if (password === repeatPassword) {
			const user = await dispatch(signup({ userName, email, password, profilePhoto }))
			if (user.errors) {
				// setErrors(user.errors)  //!not being used
			} else {
				history.push('/feed')
			}
			return user
		}
	}

	const updateUsername = e => {
		setUsername(e.target.value)
	}

	const updateEmail = e => {
		setEmail(e.target.value.toLowerCase())
	}

	const updatePassword = e => {
		setPassword(e.target.value)
	}

	const updateRepeatPassword = e => {
		setRepeatPassword(e.target.value)
	}

	const updateProfilePhoto = e => {
		setProfilePhoto(e.target.files[0])
	}

	if (sessionUser) {
		return <Redirect to="/feed" />
	}

	const emailAndPassword = () => {
		if (email.length >= 3 && password.length >= 3 && userName.length >= 3 && repeatPassword.length >= 3) {
			return true
		}
		return false
	}

	return (
		<div className="SignupForm">
			<form onSubmit={onSignUp}>
				<div>
					<label></label>
					<input placeholder="User Name" type="text" name="userName" onChange={updateUsername} value={userName}></input>
				</div>
				<div>
					<label></label>
					<input placeholder="Email" type="text" name="email" onChange={updateEmail} value={email}></input>
				</div>
				<div>
					<label></label>
					<input placeholder="Password" type="password" name="password" onChange={updatePassword} value={password}></input>
				</div>
				<div>
					<label></label>
					<input placeholder="Repeat Password" type="password" name="repeat_password" onChange={updateRepeatPassword} value={repeatPassword} required={true}></input>
				</div>
				<div id="profileUpload">
					<label>Profile Picture</label>
					<input
						id="profileUpload"
						type="file"
						name="profile_photo"
						onChange={updateProfilePhoto}
						// value={profilePhoto}
						required={true}
					></input>
				</div>
				<button id={emailAndPassword() ? 'SignupButtonTrue' : 'SignupButtonFalse'} type="submit">
					Sign Up
				</button>
				{/* <button type="submit">Sign Up</button> */}
			</form>
		</div>
	)
}

export default SignUpForm
