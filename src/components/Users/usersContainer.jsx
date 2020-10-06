import React from "react";
import { connect } from "react-redux";
import {
  addFriendAC,
  deleteFriendAC,
  setUsersAC,
} from "../../redux/users-reducer";
import Users from "./users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFriend: (usersId) => {
      dispatch(addFriendAC(usersId));
    },
    deleteFriend: (usersId) => {
      dispatch(deleteFriendAC(usersId));
    },
    setUser: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
