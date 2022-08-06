import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "TOGGLE_COUNTER": 
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
        };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
