const GET_POSTS = 'posts/getPosts'

const ADD_POST = 'posts/addPost'

const getPosts = posts => {
	return {
		type: GET_POSTS,
		posts,
	}
}

const addPost = (id, post) => {
	return {
		type: ADD_POST,
		id,
		post,
	}
}

export const posts = () => async dispatch => {
	const response = await fetch(`/api/posts/`)
	const posts = await response.json()
	dispatch(getPosts(posts))
	return posts
}

export const post = id => async dispatch => {
	const response = await fetch(`/api/posts/${id}`)
	const post = await response.json()
	dispatch(addPost(id, post))
	return post
}

export const createPost = post => async dispatch => {
	let { caption, photo } = post

	const formData = new FormData()
	formData.append('image', photo)
	const responseImageUrl = await fetch('/api/images', {
		method: 'POST',
		body: formData,
	})
	const photoData = await responseImageUrl.json()
	photo = photoData.url

	const response = await fetch('/api/posts', {
		method: 'POST',
		'Content-Type': 'application/json',
		body: {
			caption,
			photo,
		},
	})
	const data = await response.json()

	dispatch(addPost(data.post.id, data.post))
}

const initialState = {}

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			const posts = {}
			action.posts.forEach(post => {
				posts[post.post.id] = post
			})
			return {
				...state,
				...posts,
			}
		case ADD_POST:
			return {
				...state,
				posts[action.id]: action.post,
			}
		default:
			return state
	}
}

export default postsReducer
