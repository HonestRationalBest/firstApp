let initialState = {
  messages: [
    {
      name: "Вы",
      message: "Привет",
    },
    {
      name: "Вы",
      message: "Привет",
    },
    {
      name: "Вы",
      message: "Привет",
    },
    {
      name: "Ангелина Сачивко",
      message: "Пипяо",
    },
    {
      name: "Вы",
      message: "Привет",
    },
  ],
  dialogs: [
    {
      id: 1,
      name: "Ангелина Сачивко",
    },
    {
      id: 2,
      name: "Влад Мыслицкий",
    },
    {
      id: 3,
      name: "Татьяна Левшук",
    },
    {
      id: 4,
      name: "Диана Германова",
    },
    {
      id: 5,
      name: "Кристина Сергиеня",
    },
    {
      id: 6,
      name: "Анастасия Чаргазия",
    },
  ],
  newMassege: "",
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    messages: [...state.messages],
  };
  switch (action.type) {
    case "ADD-MESSAGE":
      let body = stateCopy.newMassege;
      stateCopy.newMassege = "";
      stateCopy.messages.push({
        name: action.name,
        message: body,
      });
      return stateCopy;
    case "UPDATE-MESSAGE":
      stateCopy.newMassege = action.newText;
      return stateCopy;
    default:
      return stateCopy;
  }
};

export const addMessageActionCreater = (name) => {
  return { type: "ADD-MESSAGE", name: name };
};

export const onMessageChangeActionCreater = (text) => {
  return {
    type: "UPDATE-MESSAGE",
    newText: text,
  };
};

export default dialogsReducer;
