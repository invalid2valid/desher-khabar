import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipesCard = ({ recipe }) => {
  // const [fav, setFav] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const { name, ingredients, cooking_method, rating } = recipe;

  const handleDisable = (n) => {
    setBtnDisabled(true);
    // setFav(n);
    notify(n);
  };
  const notify = (n) => toast(`${n} is added to Favorite`);

  return (
    <div className="border-2 rounded-lg p-6">
      <div className="flex justify-between items-center">
        <h1 className=" font-semibold text-gray-700 text-2xl mb-3">{name}</h1>
        <button
          className=" disabled: p-2 bg-red-600 rounded-xl text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={btnDisabled}
          onClick={() => handleDisable(name)}
        >
          Favorite
        </button>
        <ToastContainer />
      </div>
      <div className="flex item-center  mb-5">
        <p className="font-semibold">Rating:</p>
        <Rating style={{ maxWidth: 110 }} value={rating} readOnly />
      </div>
      <div className="">
        <h1 className="font-semibold">Ingredients:</h1>
        <ol className="list-decimal	pl-6 mb-5">
          {ingredients.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ol>
        <h2 className=" font-semibold ">Cooking Method:</h2>
        <p> {cooking_method}</p>
      </div>
    </div>
  );
};

export default RecipesCard;
