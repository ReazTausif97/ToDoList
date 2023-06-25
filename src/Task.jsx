const Task = () => {
  return (
    <div className="flex items-center justify-between border-2 border-white rounded-3xl p-3 mt-5">
      <div className="flex items-center">
        <input className="h-4 w-4 select-none" type="checkbox" />
        <div className="ml-5">
          <h2>8.30AM</h2>
          <h2 className="mt-3">Go to Mosque</h2>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <i class="text-[#DFBD43] fa-solid fa-pen-to-square"></i>
        <i class="text-[#DFBD43] fa-solid fa-trash"></i>
      </div>
    </div>
  );
};
export default Task;