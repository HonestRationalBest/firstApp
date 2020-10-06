import React from "react";
import style from "./message.module.css";

const Message = (props) => {
  return (
    <div className={style.message_wrapper}>
      <div className={style.avatar}></div>
      <div className={style.text_wrapper}>
        <h3>{props.name}</h3>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Message;
