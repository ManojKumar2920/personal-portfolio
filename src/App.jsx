import React from "react";
import NavBar from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
