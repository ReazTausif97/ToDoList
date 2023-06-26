import { useEffect, useReducer, useState } from "react";
import React from "react";
import Task from "./Task";
import { reducer } from "./Reducer";
import { defaultState } from "./Reducer";

const Root = () => {
  let [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div>
      <section className="w-[380px] relative bg-[#000000] text-white rounded-3xl  px-5 py-5  ">
        <h2 className="font-bold text-xl">Today's Task</h2>
        <ul className="overflow-y-auto  h-[80vh] scrollbar">
          {state.Tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
        </ul>
        {/* <div className="rounded-[inherit] absolute left-0  top-1/3 z-50 w-full px-5 py-5 flex flex-col bg-[#DFBD43]">
          <form action="">
            <label className="block" htmlFor="Task">
              Task Description
            </label>
            <input className="block" type="text" id="Task" />
            <label className="block" htmlFor="Time">
              Time
            </label>
            <input className="block" type="text" id="Time" />
            <button
              className="mt-5 rounded-xl p-3 border border-black"
              type="submit"
            >
              Add
            </button>
          </form>
        </div> */}

        <button
          onClick={() => {
            dispatch({ type: "ADD_NEW" });
          }}
          className="mt-10 bg-black rounded-full cursor-pointer absolute  shadow-xl shadow-[#dfbd4388] left-[44%] bottom-5  "
        >
          <i className="text-[#DFBD43] text-[50px] fa-solid fa-circle-plus"></i>
        </button>
      </section>
    </div>
  );
};
export default Root;
