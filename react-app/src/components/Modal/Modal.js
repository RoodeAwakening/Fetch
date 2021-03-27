import React, { useState } from 'react'
import { createPost } from '../../store/posts'
import { useDispatch } from 'react-redux'

export default function Modal() {
	const [photo, setPhoto] = useState('')
	const [caption, setCaption] = useState('')

	const dispatch = useDispatch()

	const onPost = async e => {
		e.preventDefault()

		const post = await dispatch(createPost({ photo, caption }))

		return post
	}

	const updateCaption = e => {
		setCaption(e.target.value)
	}
	const uploadPhoto = e => {
		setPhoto(e.target.files[0])
	}

	return (
		<div>
			<h2>Here1</h2>
			<h2>Here2</h2>
			<h2>Here3</h2>
			<form onSubmit={onPost}>
				<div>
					<input placeholder="Caption" type="text" namne="caption" onChange={updateCaption} value={caption}></input>
				</div>
				<div id="photoUpload">
					<label>Profile Picture</label>
					<input
						id="profileUpload"
						type="file"
						name="post_Photo"
						onChange={uploadPhoto}
						// value={profilePhoto}
						required={true}
					></input>
				</div>
				<button id="SignupButton" type="submit">
					Add Post
				</button>
			</form>
		</div>
	)
}
