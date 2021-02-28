let initialState = {
  posts: [
    {
      name: "Paul",
      post: "How are you?",
    },
    {
      name: "Angelina",
      post: "Wszystko dobrze",
    },
    {
      name: "What is love",
      post: "I'm so cool!",
    },
  ],
  newPost: "",
  profile: undefined
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        name: action.user,
        post: state.newPost,
      };
      stateCopy.posts = [...state.posts, newPost];
      stateCopy.newPost = "";
      return stateCopy;
    case "UPDATE-POST":
      stateCopy.newPost = action.newText;
      return stateCopy;
    case "SET_USER_PROFILE":
      return{...state, profile: action.profile}
    default:
      return stateCopy;
  }
};

export const addPost = (name) => {
  return { type: "ADD-POST", user: name };
};

export const onPostChange = (text) => {
  return {
    type: "UPDATE-POST",
    newText: text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: "SET_USER_PROFILE",
    profile
  };
};

export default profileReducer;
