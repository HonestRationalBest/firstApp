import React from "react";
import style from "./profile.module.css";
import Post from "./posts/post";
import preloader from "../Users/img/200.gif"

const Profile = (props) => {
  
if(!props.profile){
  return(
  <div><img alt="none" src={preloader}/></div>)
}

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
        <img className={style.content_avatar} src={props.profile.photos.large} alt="none"/>
        <div className={style.content_text}>
          <p className={style.bolt}>{props.profile.fullName}</p>
          <p>{props.profile.aboutMe}</p>
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
