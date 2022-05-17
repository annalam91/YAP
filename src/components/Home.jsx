import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-purple-900">
      <div className="max-w-5xl mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-300">Anna</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-400">
          I am a developer
        </h2>
        <p className="text-gray-500 py-4 max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          velit. Est quis deleniti voluptatibus quaerat eius totam ipsum dolor
          vel ipsam? Unde accusamus non, expedita iusto debitis fugit
          praesentium exercitationem!
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-3 flex items-center hover:bg-purple-400 hover:border-purple-400">
              View portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
