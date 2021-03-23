import React from "react";
import { useSelector } from "react-redux";
import Post from "./PostPage/Post";
export default function FeedPage() {
  return (
    <>
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
}
