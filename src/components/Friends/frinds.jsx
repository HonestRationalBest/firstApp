import React from "react";
import style from "./friends.module.css";
import Search from "./Search/search";
import Friend from "./friend/friend";
import FindButton from "./Find/find";

const Friends = (props) => {
  let friendEl = props.friendDate.map((f) => (
    <Friend name={f.name} discription={f.discription} />
  ));

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <Search />
        <FindButton />
      </div>
      {friendEl}
    </div>
  );
};

export default Friends;
