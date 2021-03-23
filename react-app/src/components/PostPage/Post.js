import React from "react";
import { useSelector } from "react-redux";
import PostPage from "./PostPage.css";

export default function Post() {
  const submitComment = () => {
    return;
  };

  return (
    <div className="Post">
      <div className="Post_header">
        <img
          className="Post_avatar"
          alt="post-photo"
          // src={user.profilePhoto}
          src="https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg"
        ></img>
        {/* <h4>{userName}</h4> */}
        <h4>Tom</h4>
      </div>
      {/* <img className="Post_photo" alt="post-photo" src={post.photo}></img> */}
      <img
        className="Post_photo"
        alt="post-photo"
        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ></img>
      <h4 className="Post_caption">
        {/* <strong>{userName}</strong> {caption} */}
      </h4>
      <div className="Post_photo-footer">
        <span className="Post_likes">likes ❤️</span>
      </div>
      <div className="Post_comment-container">
        <ul className="Post_comments-list">
          <li className="Post_comment">Comment list...</li>
          <li className="Post_comment">Comment list...</li>
          <li className="Post_comment">Comment list...</li>
          <li className="Post_comment">Comment list...</li>
        </ul>
      </div>
      <form className="Post_comment-form">
        <input
          className="Post_comment-input"
          type="text"
          // value={comment}
          placeholder="Write a comment..."
          onChange={(e) => {
            submitComment();
          }}
        />
        <button
          className="Post_comment-button"
          type="submit"
          // disabled={!comment}
          // onclick={}
        >
          {" "}
          post{" "}
        </button>
      </form>
    </div>
  );
}
