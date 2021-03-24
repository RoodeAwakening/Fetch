const GET_POSTS = "posts/getPosts";
const GET_POST = "posts/getPostId";

const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    payload: posts,
  };
};

const getPost = (id) => {
  return {
    type: GET_POST,
    payload: id,
  };
};

export const posts = () => async (dispatch) => {
  const response = await fetch(`/api/posts/`);
  const posts = await response.json();
  dispatch(getPosts(posts));
  console.log(posts);
  return posts;
};

export const post = (id) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}`);
  const data = await response.json();
  dispatch(getPost(data.id));
  return data;
};

const initialState = {
  posts: {},
};

const postsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_POSTS:
      newState = Object.assign({}, state);
      newState.posts = action.payload;
      return newState;
    case GET_POST:
      newState = Object.assign({}, state);
      newState.posts = action.payload;
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
