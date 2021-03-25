import { useSelector } from "react-redux";
import Post from "../Post/Post";
import "./PostPage.css";

export default function PostPage() {
  return (
    <>
      {/* Placeholder Post and comment form */}
      <Post />
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
          <i class="far fa-paper-plane fa-2x"></i>
        </button>
      </form>
    </>
  );
}
