import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import { modalStatus } from '../../store/modal'

import { createPost } from '../../store/posts'
import { useDispatch } from 'react-redux'
import Modal from 'react-modal'
import './Modal.css'
// MODAL PROPERTIES

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}

// const changeModal = async e => {
//   e.preventDefault()
//   const modalStatus = await dispatch(modalStatus({ modalState}))
//   setModalIsOpen(flase)
//   // if (comment.errors) {
//   // 	setErrors(comment.errors)
//   // }
//   return modalStatus
// }

Modal.setAppElement('#root')
// MODAL PROPERTIES

export default function ModalPopUp({ modalIsOpen, setModalIsOpen }) {
	const [photo, setPhoto] = useState('')
	const [caption, setCaption] = useState('')
	const [errors, setErrors] = useState('')

	let history = useHistory()

	const dispatch = useDispatch()

	const onPost = async e => {
		e.preventDefault()

		const post = await dispatch(createPost({ photo, caption }))
		console.log('test', post)
		if (post) {
			setCaption('')
			setModalIsOpen(false)
			setErrors('')
		}
		if (post === false) {
			setErrors('Please provide a photo containing a dog.')
		}
		return post
	}

	const updateCaption = e => {
		setCaption(e.target.value)
	}
	const uploadPhoto = e => {
		setPhoto(e.target.files[0])
	}

	const closeModal = e => {
		setModalIsOpen(false)
	}

	return (
		<Modal isOpen={modalIsOpen} style={customStyles}>
			<div>
				<button onClick={closeModal}>
					<i class="fal fa-times"></i>
				</button>
			</div>
			<div className="addPost">
				<form onSubmit={onPost}>
					<h2>Add a photo!</h2>
					<div id="photoUpload-caption">
						<input placeholder="Caption" type="text" namne="caption" onChange={updateCaption} value={caption}></input>
					</div>
					<div id="photoUpload">
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
		</Modal>
	)
}
