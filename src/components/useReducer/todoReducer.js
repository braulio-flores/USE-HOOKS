export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: new Date().getTime(),
          desc: action.payload.toDo,
          done: false,
        },
      ];
    case "delete":
      return state.filter((item) => item.id != action.payload);

    case "toggle":
      return state.map((item) => {
        if (item.id == action.payload) {
          return { ...item, done: !item.done };
        } else {
          return item;
        }
      });
    
    default:
      return state;
  }
};
