import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import CardComponent from "../CardComponent/CardComponent";

export default function Home({ props }) {
  return (
    <>
      <Navbar searchData="" />
      <Hero />
      <CardComponent />
    </>
  );
}
