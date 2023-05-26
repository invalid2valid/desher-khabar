import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Layout/Header/Footer/Footer";
import Header from "./Layout/Header/Header";
function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
