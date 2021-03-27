import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { posts } from '../../store/posts'
import './FeedPage.css'
import Post from '../Post/Post'

export default function FeedPage() {
	const postData = useSelector(state => state.posts)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(posts())
	}, [dispatch])

	const postInfo = []
	for (const post in postData) {
		postInfo.push(postData[post])
	}
	postInfo.reverse()

	return (
		<div className="FeedPage_container">
			<div className="FeedPage_posts">
				{postInfo.map(post => {
					return <Post key={post.post.id} postInfo={post} maxComments={3} />
				})}
			</div>
		</div>
	)
}
