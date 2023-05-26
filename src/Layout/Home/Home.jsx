import React from "react";
import Main from "./HomeMain";
import HomeMain from "./HomeMain";
import ChefSection from "./chef/ChefSection";
import HomeMini from "./RecipeSection/HomeMini/HomeMini";

const Home = () => {
  return (
    <div className="min-h-[80vh]">
      <HomeMain></HomeMain>
      <ChefSection></ChefSection>
      <HomeMini></HomeMini>
    </div>
  );
};

export default Home;
