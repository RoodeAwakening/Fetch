import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "../Post/Post";
import "./PostPage.css";

export default function PostPage() {
  const { postId } = useParams();
  console.log(postId);
  const postData = useSelector((state) => state?.posts?.[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(post(postId));
  }, [dispatch]);
  const submitComment = () => {
    return;
  };
  return (
    <div className="PostPage_post-container">
      <Post postInfo={postData} />
    </div>
  );
}
