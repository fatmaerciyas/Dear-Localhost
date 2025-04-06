import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../features/posts/postsSlice";
import { selectAllUsers } from "../features/users/userSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };

  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(addPosts(title, content, userId));

      setTitle("");
      setContent("");
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        ></textarea>
        <button onClick={onSavePostClicked} type="button" disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;

//htmlFor lable etiketinin hangi inputa bagli oldugunu belirtir

//ornegin bunlarin ikisi baglidir
//<label htmlFor="postTitle">Post Title:</label>
//<input id="postTitle" />

//Böyle yapınca kullanıcı etikete tıkladığında input aktif hale gelir
