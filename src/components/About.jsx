import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-purple-900 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-7xl w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-7xl w-full grid sm:grid-cols-2 gap-8 px-3">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, This is the about section.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              illum voluptas in quam quidem quaerat deserunt. Minus aspernatur
              necessitatibus enim aliquam at. Nemo veritatis suscipit eum omnis
              neque enim velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
