"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="flex-1 bg-secondary ml-[20%]">
      {[...Array(10)].map((e, index) => (
        <h1 key={index} className="text-4xl">
          hello
        </h1>
      ))}
    </div>
  );
};

export default Hero;
