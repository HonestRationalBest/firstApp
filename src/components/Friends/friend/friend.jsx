import React from "react";
import style from "./friend.module.css";

const Friend = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.img}></div>
      <div className={style.text_wrapper}>
        <h3>{props.name}</h3>
        <p>{props.discription}</p>
      </div>
    </div>
  );
};

export default Friend;
