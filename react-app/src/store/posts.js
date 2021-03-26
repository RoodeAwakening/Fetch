const GET_POSTS = "posts/getPosts";

const ADD_POST = "posts/addPost";

const ADD_LIKE = "posts/getLikes";

const ADD_COMMENT = 'posts/addComment';

const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    posts,
  };
};

const addPost = (id, post) => {
  return {
    type: ADD_POST,
    id,
    post,
  };
};

const addLike = (id, like) => {
  return {
    type: ADD_LIKE,
    id,
    like,
  };
};

const addComment = (postId, comment) => {
  return {
    type: ADD_COMMENT,
    postId,
    comment,
  }
}

export const posts = () => async (dispatch) => {
  const response = await fetch(`/api/posts/`);
  const posts = await response.json();
  dispatch(getPosts(posts));
  return posts;
};

export const post = (id) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}`);
  const post = await response.json();
  dispatch(addPost(id, post));
  return post;
};

export const createPost = (post) => async (dispatch) => {
  let { caption, photo } = post;

  const formData = new FormData();
  formData.append("image", photo);
  const responseImageUrl = await fetch("/api/images", {
    method: "POST",
    body: formData,
  });
  const photoData = await responseImageUrl.json();
  photo = photoData.url;

  const response = await fetch("/api/posts", {
    method: "POST",
    "Content-Type": "application/json",
    body: {
      caption,
      photo,
    },
  });
  const data = await response.json();

  dispatch(addPost(data.post.id, data.post));
};

export const createLike = (like) => async (dispatch) => {
  const { userId, postId } = like;

  const response = await fetch(`/api/posts/${postId}/likes`, {
    method: "POST",
    "Content-Type": "application/json",
    body: {
      userId,
      postId,
    },
  });
  const data = await response.json();

  dispatch(addLike(data.like.id, data.like));
};
//comment
export const createComment = (commentObject) => async (dispatch) => {
  const { commentInput, postId } = commentObject;
  console.log('///',commentInput);

  const response = await fetch(`/api/posts/${postId}/comments`, {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      
    },
    body:JSON.stringify( {
      'commentInput':commentInput
    }),
  });
  const data = await response.json();
  dispatch(addComment(postId, data.comment));
  return response
};

const initialState = {};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      const posts = {};
      action.posts.forEach((post) => {
        posts[post.post.id] = post;
      });
      return {
        ...state,
        ...posts,
      };
    case ADD_POST:
      return {
        ...state,
        [action.id]: action.post,
      };
    case ADD_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId] ,
          'comments': [
            ...state[action.postId].comments,
            action.comment
          ]
        },
      };
    default:
      return state;
  }
};

export default postsReducer;

