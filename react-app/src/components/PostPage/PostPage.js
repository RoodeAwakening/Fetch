import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "../Post/Post";
import "./PostPage.css";

export default function PostPage() {

  const submitComment = () => {
    return;
  };
  return (
    <div className="PostPage_post-container">
      <Post />
    </div>
  );
}
