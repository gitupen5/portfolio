import React from "react";
import arrayDestruct from "../assets/portfolio/DSA.png";
import installNode from "../assets/portfolio/ragegame.png";
import navbar from "../assets/portfolio/EncChatApp.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: navbar,
      href: "https://github.com/gitupen5/EncryptedChatAppProject",
    },
    {
      id: 2,
      src: installNode,
      href: "https://play.google.com/store/apps/details?id=com.ViblightStudio.UnfairSquare",
    },

    {
      id: 3,
      src: arrayDestruct,
      href: "https://leetcode.com/upen05",
    },
    {
      id: 4,
      src: reactParallax,
    },

    {
      id: 5,
      src: reactSmooth,
    },

    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, href, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href} target="_blank" rel="noreferrer">
                    View
                  </a>
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
