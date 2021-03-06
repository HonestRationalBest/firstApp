import React from "react";
import { connect } from "react-redux";
import {
  addFriend,
  deleteFriend,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
} from "../../redux/users-reducer";
import Users from "./users";
import * as axios from "axios";
import preloader from "./img/200.gif"

class UsersAPI extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false);

        this.props.setUser(response.data.items);
      });
  }


  render() {
    return (
      <>
        {this.props.isFetching ? <img src={preloader} alt="none" /> : null}
        <Users
          totalCount={this.props.totalCount}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          deleteFriend={this.props.deleteFriend}
          addFriend={this.props.addFriend}
        />
      </>);
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFriend: (usersId) => {
      dispatch(addFriend(usersId));
    },
    deleteFriend: (usersId) => {
      dispatch(deleteFriend(usersId));
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPage(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCount(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetching(isFetching));
    }
  };
};

const UsersContainer = connect(mapStateToProps,
  { addFriend, deleteFriend, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersAPI);

export default UsersContainer;
