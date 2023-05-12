import React from "react";
import { useHistory } from "react-router-dom";

const Base = ({ title, description, children }) => {
  const history = useHistory();
  return (
    <div className=" sm:flex sm:flex-col max-w-full min-h-screen md:grid md:grid-cols-8  grid-rows-auto  grid-flow-col-dense ">
      <section
        id="side-nav "
        className=" md:block hidden min-h-screen pt-6  font-semibold bg-[#ff922b] row-span-6  "
      >
        <div className="flex flex-col gap-8 p-4"></div>

        <div className="flex flex-col gap-8 items-center">
          <button
            onClick={() => history.push("/")}
            className="relative  items-center justify-center inline-block p-2 w-3/4  overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
          >
            <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#0052D4] rounded-full blur-md ease"></span>
            <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#20BDFF] rounded-full blur-md"></span>
              <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#4364F7] rounded-full blur-md"></span>
            </span>
            <span class="relative text-white">Dashboard </span>
          </button>
          <button
            onClick={() => history.push("/students")}
            className="relative  items-center justify-center inline-block p-2 w-3/4  overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
          >
            <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#0F2027] rounded-full blur-md ease"></span>
            <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#203A43] rounded-full blur-md"></span>
              <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#2C5364] rounded-full blur-md"></span>
            </span>
            <span class="relative text-white">Student-List</span>
          </button>
          <button
            onClick={() => history.push("/add")}
            className="relative  items-center justify-center inline-block p-2 w-3/4  overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
          >
            <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#c31432] rounded-full blur-md ease"></span>
            <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#240b36] rounded-full blur-md"></span>
              <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#3c1053] rounded-full blur-md"></span>
            </span>
            <span class="relative text-white">Add-student</span>
          </button>
        </div>
      </section>
      <header className=" h-24 font-semibold  md:col-span-7 bg-[#ffe8cc] shadow-lg p-6">
        <h1 className="heading text-3xl font-semibold text-gray-800 ">
          {title}
        </h1>
      </header>
      <main className="main-segment  font-semibold shadow-xl mt-4 p-6 min-h-screen md:col-span-7  ">
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Base;
