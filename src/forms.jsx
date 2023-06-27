import React from "react";
import { useState } from "react";
export function Forms({
  show,
  setShow,
  previousData,
  dispatch,
  setCurrentTask,
}) {
  let [formdata, setFormData] = useState({
    Task: previousData?.Task || "",
    Time: previousData?.Time || "",
    isDone: previousData?.isDone || false,
    id: previousData?.id || "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formdata.Task && formdata.Time) {
      if (!previousData?.id) {
        formdata.id = Date.now();
        dispatch({ type: "ADD_NEW", payload: { formdata } });
        setFormData({ Task: "", Time: "", isDone: false, id: "" });
      } else {
        dispatch({ type: "UPDATE", payload: { formdata } });
        setShow(false);
        setCurrentTask(null);
      }
    } else {
      alert(`Please enter: ${formdata.Task ? "Time" : "Task"}`);
    }
  };
  const handleOnChange = (e) => {
    formdata[e.target.name] = e.target.value;
    setFormData({ ...formdata });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <label className="block" htmlFor="Task">
            Task Description
          </label>
          <input
            className=" text-black block px-2 rounded-xl"
            type="text"
            name="Task"
            id="Task"
            value={formdata.Task}
            onChange={handleOnChange}
          />
          <label className=" block" htmlFor="Time">
            Time
          </label>
          <input
            className="  text-black block px-2 rounded-xl"
            type="text"
            name="Time"
            id="Time"
            value={formdata.Time}
            onChange={handleOnChange}
          />
        </div>

        <input
          className="cursor-pointer border border-[#dfbd4388] rounded-xl p-3 "
          type="submit"
          value={"Add"}
          name="SubmitBtn"
        />
      </form>
    </>
  );
}
