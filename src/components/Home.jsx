import React from "react";
import HeroImage from "../assets/Narutobnw.PNG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="py-4 text-4xl sm:text-6xl font-bold text-white">
            <span className="font-bold font-merienda text-red-500">Hi,</span> My
            name is
          </h2>
          <h2 className="py-2 font-bold">
            <span className="text-4xl font-merienda sm:text-6xl text-orange-400">
              Upendra Kumar
            </span>
          </h2>
          <p className="text-gray-500 py-7 max-w-md ">
            Experienced Software Developer with a demonstrated history of
            working in the software industry. Currently working as Software
            developer at Wipro Limited. I am currently working on technologies
            and frameworks like Java, and Springboot,{" "}
            <span className="font-bold text-red-500">Scroll-down</span> to know
            about me..
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mr-10 mx-auto w-2/3 md:w-80%"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
