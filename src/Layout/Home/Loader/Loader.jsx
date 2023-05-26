import React from "react";
const Loader = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center flex-col">
      {/* animate-spin */}
      <h1 className=" text-center   font-bold text-6xl ">
        {" "}
        _--.''|.Loading.|''.--_
      </h1>
      <progress className="progress w-56 m-10"></progress>
    </div>
  );
};

export default Loader;
