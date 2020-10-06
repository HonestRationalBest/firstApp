import React from "react";
import style from "./search.module.css";
import search from "../Search/img/search.svg";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className={style.header_wrapper}>
      <div className={style.button_wrapper}>
        <img src={search} alt="none" />
        <input className={style.input} placeholder="Search a friend" />
      </div>
    </div>
  );
};

export default Search;
