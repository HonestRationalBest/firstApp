import React from "react";
import style from "./post.module.css";

const Post = (props) => {
  return (
    <div className={style.post}>
      <div className={`${style.circle} ${style.send}`}></div>
      <p>
        {props.name} {props.post}
      </p>
    </div>
  );
};

export default Post;
