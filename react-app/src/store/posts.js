const GET_POSTS = "posts/getPosts";
const GET_POST = "posts/getPostId";

const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    posts,
  };
};

const getPost = (id) => {
  return {
    type: GET_POST,
    id,
  };
};

export const posts = () => async (dispatch) => {
  const response = await fetch(`/api/posts/`);
  const data = await response.json();
  dispatch(getPosts(data.posts));
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
  id: null,
};

const postsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_POSTS:
      newState = Object.assign({}, state);
      newState.id = action.payload;
      return newState;
    case GET_POST:
      newState = Object.assign({}, state);
      newState.id = action.payload;
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
