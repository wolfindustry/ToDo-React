import { useState } from "react";
import rasm from "./assets/To-Do-Logo 1.png";
import Select from "./Select";
import Works from "./Works";

const TodoApp = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  return (
    <div className="w-full">
      <div className="w-full flex p-5 bg-orange-50 items-center justify-center ">
        <img src={rasm} alt="rasm" />
      </div>
      <div className="w-full flex bg-[#F3F3F3] group ">
        <Select stil="orange">Personal</Select>
        <Select>Professional</Select>
      </div>
      <div className="w-full items-center flex justify-center p-10">
        <label
          className="overflow-hidden rounded-3xl w-[60%] pl-5 flex justify-between bg-[#F1ECE6]"
          htmlFor=""
        >
          <input
            type="text"
            className="w-full outline-none"
            placeholder="What do you need to do?"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            className="text-4xl font-medium bg-blue-300 text-white py-2.5 px-7 cursor-pointer"
            onClick={() => setData([...data, { title: title, done: false }])}
          >
            ADD
          </button>
        </label>
      </div>
      {data.map((item) => (
        <Works done={item.done} title={item.title} />
      ))}
    </div>
  );
};

export default TodoApp;
