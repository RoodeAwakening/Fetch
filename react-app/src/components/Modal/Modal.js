import React, { useState } from 'react'

import { useHistory } from "react-router-dom";
import { modalStatus } from '../../store/modal'

import { createPost } from '../../store/posts'
import { useDispatch } from 'react-redux'
import Modal from 'react-modal'
// MODAL PROPERTIES

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    
  }
};

// const changeModal = async e => {
//   e.preventDefault()
//   const modalStatus = await dispatch(modalStatus({ modalState}))
//   setModalIsOpen(flase)
//   // if (comment.errors) {
//   // 	setErrors(comment.errors)
//   // }
//   return modalStatus
// }

console.log('3333',{modalStatus});
Modal.setAppElement('#root')
// MODAL PROPERTIES




export default function ModalPopUp({modalIsOpen, setModalIsOpen}) {
	const [photo, setPhoto] = useState('')
	const [caption, setCaption] = useState('')
  let history = useHistory();

	const dispatch = useDispatch()

	const onPost = async e => {
		e.preventDefault()

		const post = await dispatch(createPost({ photo, caption }))
    setModalIsOpen(false)
		return post
	}

	const updateCaption = e => {
		setCaption(e.target.value)
	}
	const uploadPhoto = e => {
		setPhoto(e.target.files[0])
	}




return(
  <Modal 
  isOpen={modalIsOpen}
  style={customStyles} >
  	<div>
			
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
				<button id="SignupButton" type="submit" >
					Add Post
				</button>
			</form>
		</div>
</Modal>
)






	
}
