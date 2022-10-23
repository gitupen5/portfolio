import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          A passionate Computer Science Engineer who likes to develop software
          and sometimes video games.
        </p>

        <br />

        <p className="text-xl">
          I am currently working on technologies and frameworks like Java, and
          Springboot, I like to solve problems based on Data Structures and
          Algorithms.
        </p>
        <br />
        <p className="text-xl">
          I have developed and published an android game{" "}
          <span className="font-bold text-orange-500">"Unfair Square"</span>{" "}
          which is having{" "}
          <span className="font-bold text-orange-500">"50k+ downloads"</span> on
          the google play store.
        </p>
      </div>
    </div>
  );
};

export default About;
