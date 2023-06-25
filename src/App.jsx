import { useState } from "react";
import Task from "./Task";

function App() {
  return (
    <>
      <section className="w-[380px] bg-[#000000] text-white rounded-3xl px-5 py-10">
        <h2 className="font-bold text-xl">Today's Task</h2>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </section>
    </>
  );
}

export default App;
