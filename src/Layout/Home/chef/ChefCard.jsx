import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefCard = (props) => {
  const { id, name, like, experience, recipes, picture } = props;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="h-[300px] w-[200px]">
        <img className="max-w-max   h-full" src={picture} alt="Chef" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold my-5">{name}</h2>
        <div className="flex flex-col items-start content-evenly">
          <p className="flex gap-1 items-center">
            Likes: {like}+ {<FaThumbsUp />}
          </p>
          <p className="">Years of experience: {experience} year+</p>
          <p className="">Numbers of recipes: {recipes}+</p>
          <Link
            to={`/chef/${id}`}
            className="btn bg-red-600 outline-0 outline-red-600 my-4"
          >
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
