import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { posts } from '../../store/posts'
import './FeedPage.css'
import Post from '../Post/Post'

export default function FeedPage() {
	const postData = useSelector(state => state.posts)
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)
	

	useEffect(() => {
		dispatch(posts()).then(
			setLoading(true),
			console.log(loading)
		)
	}, [dispatch])

	// useEffect(()=>{
	// 	setIsLoading(false)

	// },[[postData].length])

	const postInfo = []
	for (const post in postData) {
		postInfo.push(postData[post])
		
	}
	postInfo.reverse()
	console.log('--',[postData].length);
	if(!loading){
		return (
			<div className="FeedPage_container">
			<div className="FeedPage_posts">
			<h2>Loading...</h2>
			<img src='https://media.tenor.com/images/d7afbeb5c3b3efc48a86eb2c3450ceb8/tenor.gif'/>
			
			</div>
		</div>
		)
	}
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
