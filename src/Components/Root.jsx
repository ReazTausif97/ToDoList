import { useEffect, useReducer, useState } from "react";
import React from "react";
import Task from "./Task";
import { reducer } from "./Reducer";
import { defaultState } from "./Reducer";

const Root = () => {
  let [state, dispatch] = useReducer(reducer, defaultState);
  let [show, setShow] = useState("-bottom-80");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTask = Object.fromEntries(formData);
    newTask["isDone"] = false;
    newTask["id"] = Date.now();
    console.log(newTask);
    dispatch({ type: "ADD_NEW", payload: { newTask } });
  };
  return (
    <div>
      <section className="w-[380px] relative bg-[#000000] text-white rounded-3xl overflow-hidden px-5 py-5  ">
        <h2 className="font-bold text-xl">Today's Task</h2>
        <ul className="overflow-auto  h-[80vh] scrollbar">
          {state.Tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
        </ul>
        <div
          className={`ease-in-out flex flex-col items-center justify-center rounded-[inherit] bg-black absolute left-0 ${show} z-50 w-full px-5 py-5 border border-[#dfbd4388]`}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <label className="block" htmlFor="Task">
                Task Description
              </label>
              <input
                className=" text-black block"
                type="text"
                name="Task"
                id="Task"
              />
              <label className=" block" htmlFor="Time">
                Time
              </label>
              <input
                className="  text-black block"
                type="text"
                name="Time"
                id="Time"
              />
            </div>

            <button
              className=" border border-[#dfbd4388] rounded-xl p-3 "
              type="submit"
            >
              Add
            </button>
          </form>
        </div>

        <button
          onClick={() => {
            setShow("bottom-0");
          }}
          className="mt-10 bg-black rounded-full cursor-pointer absolute shadow-xl shadow-[#dfbd4388] left-[44%] bottom-5  "
        >
          <i className="text-[#DFBD43] text-[50px] fa-solid fa-circle-plus"></i>
        </button>
      </section>
    </div>
  );
};
export default Root;
