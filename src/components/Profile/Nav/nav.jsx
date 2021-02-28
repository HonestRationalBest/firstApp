import React from "react";
import style from "./nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={style.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={style.active}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/friends" activeClassName={style.active}>
            Frieds
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={style.active}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting" activeClassName={style.active}>
            Setting
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName={style.active}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
