import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
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
    },
    friendsPage: {
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
    },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
