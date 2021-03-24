const GET_POSTS = "posts/getPosts";
const GET_POST = "posts/getPostId";

const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    posts,
  };
};

const getPost = (post) => {
  return {
    type: GET_POST,
    post,
  };
};

export const posts = () => async (dispatch) => {
  const response = await fetch(`/api/posts/`);
  const posts = await response.json();
  dispatch(getPosts(posts));
  return posts;
};

export const post = (id) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}`);
  const post = await response.json();
  dispatch(getPost(post));
  return post;
};

const initialState = {
  posts: {},
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        posts: {
          ...state.posts,
          ...action.posts,
        },
      };
    case GET_POST:
      return {
        posts: {
          ...state.posts,
          ...action.post,
        },
      };
    default:
      return state;
  }
};

export default postsReducer;
