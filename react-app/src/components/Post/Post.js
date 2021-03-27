import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createLike, removeLike } from '../../store/posts'
import { createComment } from '../../store/posts'
import './Post.css'

export default function Post({ postInfo, maxComments }) {
	const dispatch = useDispatch()
	const postData = useSelector(state => state.posts)
	// const [errors, setErrors] = useState([]) //!not being used
	const [commentInput, setCommentInput] = useState('')
	const [liked, setLiked] = useState()

	const addComment = async e => {
		e.preventDefault()
		const comment = await dispatch(createComment({ commentInput, postId: postInfo.post.id }))
		setCommentInput('')
		// if (comment.errors) {
		// 	setErrors(comment.errors)
		// }
		return comment
	}

	const updateComment = e => {
		setCommentInput(e.target.value)
	}

	const commentLength = () => {
		if (commentInput.length >= 3) {
			return true
		}
		return false
	}

	const like = () => {
		if (!liked) {
			dispatch(createLike(postInfo.post.id))
			setLiked(true)
		} else {
			dispatch(removeLike(postInfo.post.id))
			setLiked(false)
		}
	}
	return (
		<div className="Post">
			<div className="Post_header">
				<img className="Post_avatar" alt="avatar" src={postInfo?.user?.profilePhoto}></img>
				<h4>{postInfo?.user?.username}</h4>
			</div>
			<div className="Post_photo-container">
				<img className="Post_photo" alt="post" src={postInfo?.post?.photo}></img>
			</div>
			<div className="Post_photo-footer">
				<span className="Post_likes">
					<i className="far fa-heart" id="Post_heart" onClick={like} />
				</span>
				<span className="Post_like-count">{postInfo?.likeData.length}</span>
				<span className="Post_comment-icon">
					<Link className="Post_comment-icon" to={`/posts/${postInfo?.post?.id}`}>
						<i className="far fa-comment" id="Post_comment-bubble"></i>
					</Link>
				</span>
				<span className="Post_comment-count">{postInfo?.commentData.length}</span>
				<p className="Post_caption">
					<strong>{postInfo?.user?.username}</strong> {postInfo?.post?.caption}
				</p>
			</div>
			<div className="Post_comment-container">
				<ul className="Post_comments-list">
					{postInfo?.commentData &&
						postInfo?.commentData?.map((comment, i) => {
							return (
								<li key={comment.comment.id} className={`Post_comment ${i >= maxComments ? 'hidden' : ''}`}>
									<img alt="comment-avatar" className="Post_comment-avatar" src={comment.comment_by.profilePhoto} />
									<span className="Post_comment-username">
										<strong>{comment.comment_by.username}</strong>
									</span>
									<span className="Post_comment-content">{comment.comment.content}</span>
								</li>
							)
						})}
				</ul>
				<div className="commentPost">
					<form onSubmit={addComment}>
						<div id="commentContainerInput">
							<input className="commentInput" placeholder="Add a comment..." type="text" name="comment" onChange={updateComment} value={commentInput}></input>
						</div>
						<button type="submit" className={commentLength() ? 'commentPostButtonTrue' : 'commentPostButtonFalse'}>
							Post
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
