
const initialState = {
  text: "Initial Text"
};

export default (state = initialState, action) => {
  switch(action.type) {
    case "UPDATE_MESSAGE":
      return {text: action.text};
    default:
      return state;
  }
};
