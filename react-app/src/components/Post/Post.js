import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { post } from '../../store/posts'
import './Post.css'

export default function Post({ postInfo }) {
	const dispatch = useDispatch()
	const { postId } = useParams()
	const { [postId]: postData } = useSelector(state => state.posts)



	return (
		<div className="Post">
			<div className="Post_header">
				<img className="Post_avatar" alt="post-photo" src={postInfo?.user?.profilePhoto}></img>
				<h4>{postInfo?.user?.username}</h4>
			</div>
			<div className="Post_photo-container">
				<img className="Post_photo" alt="post-photo" src={postInfo?.post?.photo}></img>
			</div>
			<div className="Post_photo-footer">
				<span className="Post_likes">
					<i className="far fa-heart" id="Post_heart" />
				</span>
				<span className="Post_comment-icon">
					<Link className="Post_comment-icon" to={`/posts/${postInfo?.post?.id}`}>
						<i className="far fa-comment" id="Post_comment-bubble"></i>
					</Link>
				</span>
				<p className="Post_caption">
					<strong>{postInfo?.user?.username}</strong> {postInfo?.post?.caption}
				</p>
			</div>
			<div className="Post_comment-container">
				<ul className="Post_comments-list">
					<li className="Post_comment">Comment list...</li>
					<li className="Post_comment">Comment list...</li>
					<li className="Post_comment">Comment list...</li>
				</ul>
			</div>
		</div>
	)
}
