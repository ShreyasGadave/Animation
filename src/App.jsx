import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />
      <Marquee /> 
      <About />
      <Eyes/>
      <Featured />
      <Cards/>
    </div>
  );
}

export default App;
