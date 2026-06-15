import React from "react";
import Header from "./Header";
import Service from "./Service";
import About from "./About";
import Work from "./Work";

export default function Home() {
  return (
    <>
      <Header />
      <Service/>
     <About/>
     <Work/>
    </>
  );
}