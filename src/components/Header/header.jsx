import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <div className={style.circle}> </div>
        <p className={style.text}> Developing </p>{" "}
      </div>{" "}
    </header>
  );
};

export default Header;
