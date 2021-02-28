const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const ADD = 'ADD';
const DELETE = 'DELETE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 5,
  currentPage: 1,
  isFetching: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return { u };
        }),
      };
    case "DELETE":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return { u };
        }),
      };
    case "SET_USERS":
      return { ...state, users: action.users };
    case "SET_CURRENT_PAGE":
      return{...state, currentPage: action.currentPage};
    case "SET_TOTAL_USERS_COUNT":
      return{...state, totalUsersCount: action.count};
    case "TOGGLE_IS_FETCHING":
      return{...state, isFetching: action.isFetching};
    default:
      return state;
  }
};

export const addFriend = (userId) => {
  return { type: "ADD", userId: userId };
};

export const deleteFriend = (userId) => {
  return {
    type: "DELETE",
    userId: userId,
  };
};

export const setUsers = (users) => {
  return {
    type: "SET_USERS",
    users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: "SET_CURRENT_PAGE",
    currentPage
  };
};

export const setTotalUsersCount = (totalCount) => {
  return {
    type: "SET_TOTAL_USERS_COUNT",
    count: totalCount
  };
};

export const toggleIsFetching = (isFetching)=>{
return {
  type: "TOGGLE_IS_FETCHING",
  isFetching}
}

export default usersReducer;
