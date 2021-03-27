import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { post } from '../../store/posts'
import { createComment } from '../../store/posts'
import './Post.css'

export default function Post({ postInfo }) {
	const dispatch = useDispatch()
	const { postId } = useParams()
	const { [postId]: postData } = useSelector(state => state.posts)
	const [errors, setErrors] = useState([])
	const [commentInput, setCommentInput] = useState('')

	if (!postInfo) {
		if (postData) {
			postInfo = postData
		} else {
			dispatch(post(postId))
		}
	}

	const addComment = async e => {
		e.preventDefault()
		const comment = await dispatch(createComment({ commentInput, postId: postInfo.post.id }))
		if (comment.errors) {
			setErrors(comment.errors)
		}
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
						postInfo?.commentData?.map(comment => {
							return (
								<li className="Post_comment">
									<img className="Post_comment-avatar" src={comment.comment_by.profilePhoto} />
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
							<input id="commentInput" placeholder="Add a comment..." type="text" name="comment" onChange={updateComment} value={commentInput}></input>
						</div>
						<button type="submit" id={commentLength() ? 'commentPostButtonTrue' : 'commentPostButtonFalse'}>
							Post
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
