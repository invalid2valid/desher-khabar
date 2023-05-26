import React from "react";
import image from "../../../public/maxresdefault.jpg";

const HomeMain = () => {
  return (
    <div className="md:flex justify-evenly items-center gap-14 md:min-h-[80vh] m-2">
      <div className="">
        <img className="rounded-lg md:h-[70vh] " src={image} alt="" />
      </div>
      <div className="flex items-center">
        <p className=" font-semibold text-4xl text-center">
          <span className="text-red-600 text-center">চলে এসেছে </span> পরটা
          ভাজা_ <br /> হাজির এখানে{" "}
          <span className="text-red-600">রান্নার রাজা</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default HomeMain;
