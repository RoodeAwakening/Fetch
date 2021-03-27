import React, { useState } from "react";
import { createPost } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";

export default function Modal() {
  const [postPhoto, setPostPhoto] = useState("");
  const [postCaption, setPostCaption] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  const onPost = async (e) => {
    e.preventDefault();
    
      const post = await dispatch(
        createPost({postPhoto, postCaption})
      );
      if (post.errors) {
        setErrors(post.errors);
      }
      return post;
  
  };





  const updatePostCaption = (e) => {
    setPostCaption(e.target.value);
  };
  const uploadPostPhoto = (e) => {
    setPostPhoto(e.target.files[0]);
  };

  return (
    <div>
      <h2>Here1</h2>
      <h2>Here2</h2>
      <h2>Here3</h2>
      <form onSubmit={onPost}>
        <div>
          <input 
          placeholder='Caption'
          type='text'
          namne='postCaption'
          onChange={updatePostCaption}
          value={postCaption}
          ></input>
        </div>
        <div id="postPhotoUpload">
          <label>Profile Picture</label>
          <input
            id="profileUpload"
            type="file"
            name="profile_photo"
            onChange={uploadPostPhoto}
            // value={profilePhoto}
            required={true}
          ></input>
        </div>
        <button id='SignupButton' type="submit">Add Post</button>
      </form>
    </div>
  );
}
