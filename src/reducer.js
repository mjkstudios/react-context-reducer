export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [
          ...state.items,
          { id: state.items.length - 1, name: action.payload, done: false }
        ]
      };
    case "MARK_AS_DONE":
      return {
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, done: true } : item
        )
      };
    default:
      throw Error("Invalid action");
  }
};
