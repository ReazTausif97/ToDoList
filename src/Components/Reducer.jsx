import { useReducer } from "react";
export const defaultState = {
  Tasks: [],
};

export const reducer = (state, action) => {
  if (action.type === "DONE") {
    state.Tasks[action.payload.index].isDone = true;
  } else if (action.type === "NOT_DONE") {
    state.Tasks[action.payload.index].isDone = false;
  } else if (action.type === "ADD_NEW") {
    const alltasks = state.Tasks;
    alltasks.push(action.payload.formdata);
    state.Tasks = alltasks;
  } else if (action.type === "REMOVE_TASK") {
    state.Tasks = state.Tasks.filter((task) => task.id !== action.payload.id);
  } else if (action.type === "UPDATE") {
    const remaining = state.Tasks.filter(
      (task) => task.id !== action.payload.formdata.id
    );
    state.Tasks = [...remaining, action.payload.formdata];
  }
  console.log(state.Tasks);
  return { ...state };
};
