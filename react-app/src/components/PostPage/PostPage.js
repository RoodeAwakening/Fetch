import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Post from '../Post/Post'
import './PostPage.css'

export default function PostPage() {
	const { postId } = useParams()
	const postData = useSelector(state => state.posts)
	console.log(postId)

	return (
		<div className="PostPage_post-container">
			<Post postInfo={postData} />
		</div>
	)
}
