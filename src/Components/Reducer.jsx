import { useReducer } from "react";
export const defaultState = {
  Tasks: [
    {
      id: 0,
      Time: "8.30AM",
      Task: "Code and code",
      isDone: false,
    },
  ],
};

export const reducer = (state, action) => {
  if (action.type === "DONE") {
    state.Tasks[action.payload.index].isDone = true;
    console.log(state.Tasks);
    return { ...state };
  } else if (action.type === "NOT_DONE") {
    state.Tasks[action.payload.index].isDone = false;
    console.log(state.Tasks);
    return { ...state };
  } else if (action.type === "ADD_NEW") {
    const alltasks = state.Tasks;
    alltasks.push({
      ...alltasks[alltasks.length - 1],
      id: Date.now(),
    });
    state.Tasks = alltasks;
    // console.log(state);
    return { ...state };
  }
};
