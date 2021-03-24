import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Post.css";

export default function Post() {
  const history = useHistory();

  return (
    <div className="Post">
      <div className="Post_header">
        <img
          className="Post_avatar"
          alt="post-photo"
          // src={user.profilePhoto}
          src="https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg"
        ></img>
        <h4>Tom</h4>
        {/* <h4>{userName}</h4> */}
      </div>
      {/* <img className="Post_photo" alt="post-photo" src={post.photo}></img> */}
      <img
        className="Post_photo"
        alt="post-photo"
        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ></img>
      <div className="Post_photo-footer">
        <span className="Post_likes">
          <i className="far fa-heart" id="Post_heart"></i>
        </span>
        <span className="Post_comment-icon">
          <Link className="Post_comment-icon" to="/post">
            <i className="far fa-comment" id="Post_comment-bubble"></i>
          </Link>
        </span>
        <p className="Post_caption">
          {/* <strong>{userName}</strong> {caption} */}
          <strong>Tom</strong> My furrevver fren
        </p>
      </div>
      <div className="Post_comment-container">
        <ul className="Post_comments-list">
          <li className="Post_comment">Comment list...</li>
          <li className="Post_comment">Comment list...</li>
          <li className="Post_comment">Comment list...</li>
          <li className="Post_comment">Comment list...</li>
        </ul>
      </div>
    </div>
  );
}
