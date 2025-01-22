const initialState = 1;

export const bankPlus = (money) => {
  return { type: "bank/INCREMENT", value: money };
};

export const bankMinus = (money) => {
  return { type: "bank/DECREMENT", value: money };
};

export const bankReducer = (state = initialState, action) => {
  console.log("state", state);
  if (action.type == "bank/INCREMENT") {
    state = state + Number(action.value);
    return state;
  } else if (action.type == "bank/DECREMENT") {
    state = state + Number(action.value);
    return state;
  } else {
    return state;
  }
};
