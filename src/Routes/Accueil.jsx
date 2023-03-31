import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";



function Accueil() {
  return (
    <div className="App">
        <Header />
        <Outlet />
        <br>
        </br>
        <Footer />
    </div>
  );
}

export default Accueil