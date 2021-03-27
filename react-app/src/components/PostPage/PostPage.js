import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { post } from '../../store/posts'
import Post from '../Post/Post'
import './PostPage.css'
import React, { useEffect } from 'react'

export default function PostPage() {
	const dispatch = useDispatch()
	const { postId } = useParams()
	//grabs the post store and gets the key value by post id and destructures
	const { [postId]: postData } = useSelector(state => state.posts)

	useEffect(() => {
		if (!postData) dispatch(post(postId))
	}, [dispatch, postId])

	return (
		<div className="PostPage_post-container">
			<div>
				<Post postInfo={postData} />
			</div>
		</div>
	)
}
