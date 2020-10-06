let initialState = {
  friends: [
    {
      name: "Ангелина Сачивко",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      name: "Ангелина Сачивко",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      name: "Ангелина Сачивко",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      name: "Ангелина Сачивко",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
  ],
};

const friendsReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  return stateCopy;
};

export default friendsReducer;
