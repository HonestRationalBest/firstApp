import React from "react";
import style from "./find.module.css";

const FindButton = () => {
  return (
    <div className={style.header_wrapper}>
      <button className={style.find} path="/find">
        find a friend
      </button>
    </div>
  );
};

export default FindButton;
