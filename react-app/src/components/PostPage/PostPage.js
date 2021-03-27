import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { post } from '../../store/posts'
import Post from '../Post/Post'
import './PostPage.css'
import React, { useEffect } from 'react'

export default function PostPage() {
	const dispatch = useDispatch()
	const { postId } = useParams()
	const { [postId]: postData } = useSelector(state => state.posts)

	useEffect(() => {
		dispatch(post(postId))
	}, [dispatch])
	//grabs all the posts and gets the key value by post id and destructures

	return (
		<div className="PostPage_post-container">
			<div>
				<Post postInfo={postData} />
			</div>
		</div>
	)
}
