import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { posts } from "../../store/posts";
import "./FeedPage.css";
import Post from "../Post/Post";

export default function FeedPage() {
  const postData = useSelector((state) => state.posts);
  console.log("POST_DATA:", postData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(posts());
  }, [dispatch]);

  const postInfo = [];
  for (const post in postData) {
    postInfo.push(postData[post]);
  }

  return (
    <div className="FeedPage_posts">
      {/* {postData.map((post) => console.log(post))} */}
      {postInfo.map((post) => {
        return <Post postInfo={post} />;
      })}
    </div>
  );
}
