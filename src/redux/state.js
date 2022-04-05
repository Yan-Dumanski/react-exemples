import {renderEntireTree} from '../render'
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi!", likesCount: 12 },
      { id: 2, message: "Hello!", likesCount: 14 },
      { id: 3, message: "yes!", likesCount: 54 },
      { id: 4, message: "no", likesCount: 32 },
    ],
  },
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: "Yan",
        avatar: "https://mena.org.ua/wp-content/uploads/2014/03/avatar.png",
        messages: [
          { id: 1, message: "hi", type: "received" },
          { id: 2, message: "ass", type: "received" },
          { id: 3, message: "lox", type: "sent" },
        ],
      },
      {
        id: 2,
        name: "vlad",
        avatar: "https://mena.org.ua/wp-content/uploads/2014/03/avatar.png",
        messages: [
          { id: 1, message: "goo" },
          { id: 2, message: "putin sdoh", type: "sent" },
          { id: 3, message: "chupa lox", type: "received" },
        ],
      },
      {
        id: 3,
        name: "Liza",
        avatar: "https://mena.org.ua/wp-content/uploads/2014/03/avatar.png",
        messages: [{ id: 1, message: "bidlo" }],
      },
      {
        id: 4,
        name: "obama",
        avatar: "https://mena.org.ua/wp-content/uploads/2014/03/avatar.png",
        messages: [{ id: 1, message: "kukuha" }],
      },
    ],
  },
};

export let addPost = (postMessage)=> {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  renderEntireTree(state)
}

export default state;
