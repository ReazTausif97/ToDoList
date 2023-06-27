import { Forms } from "../forms";
import { useEffect, useReducer, useState } from "react";
import React from "react";
import Task from "./Task";
import { reducer } from "./Reducer";
import { defaultState } from "./Reducer";

const Root = () => {
  let [state, dispatch] = useReducer(reducer, defaultState);
  let [show, setShow] = useState(false);
  let [currentTask, setCurrentTask] = useState(null);

  // const handleSubmit = (e) => {
  //   console.log(e.target.SubmitBtn.value);
  //   e.preventDefault();
  //   if (formdata.Task && formdata.Time) {
  //     formdata.id = Date.now();
  //     dispatch({ type: "ADD_NEW", payload: { formdata } });
  //     setFormData({ Task: "", Time: "", isDone: false, id: "" });
  //   } else {
  //     alert(`Please enter: ${formdata.Task ? "Time" : "Task"}`);
  //   }
  // };
  // const handleOnChange = (e) => {
  //   formdata[e.target.name] = e.target.value;
  //   setFormData({ ...formdata });
  // };
  return (
    <div>
      <section className="w-[380px] relative bg-[#000000] text-white rounded-3xl overflow-hidden px-5 py-5  ">
        <h2 className="font-bold text-xl">Today's Task</h2>
        <ul className="overflow-auto  h-[80vh] scrollbar">
          {state.Tasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              state={state}
              dispatch={dispatch}
              index={index}
              show={show}
              setShow={setShow}
              setCurrentTask={setCurrentTask}
            />
          ))}
        </ul>
        {show && (
          <div
            className={`ease-in-out flex flex-col items-center justify-center rounded-[inherit] bg-black absolute left-0 bottom-0 z-50 w-full px-5 py-5 border border-[#dfbd4388]`}
          >
            <div className="w-full text-xl text-right">
              <i
                onClick={() => setShow(false)}
                className="cursor-pointer fa-solid fa-xmark"
              ></i>
            </div>
            <Forms
              show={show}
              setShow={setShow}
              previousData={currentTask}
              dispatch={dispatch}
              setCurrentTask={setCurrentTask}
            />
          </div>
        )}

        <button
          onClick={() => {
            setShow(true);
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
