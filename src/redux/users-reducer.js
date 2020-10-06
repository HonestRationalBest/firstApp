let initialState = {
  users: [],
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
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const addFriendAC = (userId) => {
  return { type: "ADD", userId: userId };
};

export const deleteFriendAC = (userId) => {
  return {
    type: "DELETE",
    userId: userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: "SET_USERS",
    users,
  };
};

export default usersReducer;
