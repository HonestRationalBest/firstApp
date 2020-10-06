import React from "react";
import style from "./profile.module.css";
import Post from "./posts/post";
import {
  addPostActionCreater,
  onPostChangeActionCreater,
} from "../../redux/profile-reducer";

const Profile = (props) => {
  const elPost = props.posts.map((el) => (
    <Post name={el.name} post={el.post} />
  ));

  const newPostEl = React.createRef();

  const addPost = () => {
    let name = "Paul";
    props.addPost(name);
  };

  const onPostChange = () => {
    let text = newPostEl.current.value;
    props.onPostChange(text);
  };

  return (
    <div className={style.profile}>
      <div className={style.content_img}></div>
      <div className={style.content_avatar_wrapper}>
        <div className={style.content_avatar}></div>
        <div className={style.content_text}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing
          </p>
        </div>
      </div>
      <div className={style.content_posts}>
        <h2>News</h2>
        <p>New post:</p>
        <textarea
          class={style.post_place}
          ref={newPostEl}
          value={props.newPostText}
          onChange={onPostChange}
        />
        <button className={style.post_button} onClick={addPost}>
          send
        </button>
      </div>
      {elPost}
    </div>
  );
};

export default Profile;

// const elPost = props.postDate.posts.map((el) => (
//   <Post name={el.name} post={el.post} />
// ));

// const newPostEl = React.createRef();

// const addPost = () => {
//   let name = "Paul";
//   props.dispatch(addPostActionCreater(name));
// };

// const onPostChange = () => {
//   let text = newPostEl.current.value;
//   props.dispatch(onPostChangeActionCreater(text));
// };
