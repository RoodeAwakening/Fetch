import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { posts } from "../../store/posts";
import "./FeedPage.css";
import Post from "../Post/Post";

export default function FeedPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(posts)
  }, [dispatch]);

  return (
    <div className="FeedPage_posts">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
