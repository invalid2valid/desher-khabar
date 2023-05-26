import React, { useEffect, useState } from "react";
import RecipesCard from "./card/RecipesCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";

const RecipesMain = () => {
  const [chef, setChef] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://data-invalid2valid.vercel.app/chef/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);

  const {
    bio,
    name,
    num_recipes,
    picture,
    recipes,
    user_liked,
    years_of_experience,
  } = chef;

  return (
    <div>
      <div className="md:min-h-[80vh] flex items-center">
        {/* Banner section */}
        <div className="md:w-1/2 ">
          <p className="text-5xl font-extrabold leading-[80px]">
            This is{" "}
            <span className="p-2 bg-red-600 rounded-full text-white">
              {name}
            </span>
            . <br /> One of the best chef in Bangladesh.
          </p>
          <p className="my-5 text-lg font-semibold text-gray-600">{bio}</p>
        </div>

        {/* card group section */}

        <div className="md:w-1/2 flex justify-center">
          <div className="h-[605px] w-[512px] relative">
            <LazyLoadImage
              className=" h-full rounded-t-[100px] rounded-b-[100px] shadow-2xl shadow-red-900"
              alt={"image.alt"}
              // height={605}
              src={picture} // use normal <img> attributes as props
              width={480}
            />
            <span className="shadow-lg bottom-56  py-2 -right-5 p-4 absolute text-white font-semibold text-2xl bg-red-600 rounded-full">
              Number Of Recipes: {num_recipes}+
            </span>
            <span className="shadow-lg top-4 -right-10 py-2 20 p-4 absolute text-white font-semibold text-2xl bg-red-600 rounded-full">
              User Liked: {user_liked}+
            </span>
            <span className="shadow-lg bottom-8 -left-24 px-4 py-2  absolute text-white font-semibold text-2xl bg-red-600 rounded-full">
              Experience: {years_of_experience}yr+
            </span>
          </div>
        </div>
      </div>
      <div className="my-32">
        <h1 className="text-center font-semibold text-4xl underline m-5">
          Some Best Recipes
        </h1>
        <div className="grid grid-cols-3 gap-2">
          {recipes?.map((recipe, index) => (
            <RecipesCard key={index} recipe={recipe}></RecipesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesMain;
