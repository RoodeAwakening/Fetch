import React from "react";
import { useSelector } from "react-redux";
import "./FeedPage.css";
import Post from "../Post/Post";

export default function FeedPage() {
  return (
    <div className="FeedPage_posts">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
