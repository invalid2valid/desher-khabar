import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";

const ChefSection = () => {
  const navigation = useNavigation();
  // console.log(navigation.state, "grrr");
  if (navigation.state === "loading") {
    return <Loader />;
  }

  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://data-invalid2valid.vercel.app/")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div className=" my-5 md:my-20 mx-2">
      <h1 className="text-center text-4xl font-bold m-10">Our Chef List</h1>
      <div className="grid md:grid-cols-2 gap-5">
        {chefs.map((chef) => (
          <ChefCard
            key={chef.id}
            id={chef.id}
            name={chef.name}
            experience={chef.years_of_experience}
            recipes={chef.num_recipes}
            like={chef.user_liked}
            picture={chef.picture}
          ></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
