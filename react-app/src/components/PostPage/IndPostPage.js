import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "../Post/Post";
import "./PostPage.css";

export default function IndPostPage() {
  const { postId } = useParams();
  const postData = useSelector((state) => state.posts);
  console.log("---postId", postData);

  return (
    <div className="PostPage_post-container">
      <h2>Hello from post page</h2>
      <div>
        <Post postInfo={postData} />
      </div>
    </div>
  );
}
