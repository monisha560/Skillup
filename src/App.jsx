import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";
import Money from "./components/Money";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Experience />
      <Plans />
      <Money />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
