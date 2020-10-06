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
    default:
      return stateCopy;
  }
};

export const addPostActionCreater = (name) => {
  return { type: "ADD-POST", user: name };
};

export const onPostChangeActionCreater = (text) => {
  return {
    type: "UPDATE-POST",
    newText: text,
  };
};

export default profileReducer;
