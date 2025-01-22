// 1.reducer 함수 생성

const initialState = 1;

// action을 리턴하는 함수
export const countPlus = () => {
  return { type: "count/INCREMENT" };
};

export const countMinus = () => {
  return { type: "count/DECREMENT" };
};

export const counterReducer = (state = initialState, action) => {
  if (action.type == "count/INCREMENT") {
    return state + 1;
  } else if (action.type == "count/DECREMENT") {
    return state - 1;
  } else {
    return state;
  }
};
