import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-400 pb-4 ">
      <h1 className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
        About
        <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
          {" "}
          Me
        </span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8 "
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl h-full w-[400px]"
              src="/dev.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center items-center lg:justify-start">
            <p className="my-20 max-w-xl py-6">
              I’m Henil Shrimali, a passionate MERN Stack Developer with
              expertise in Type Script, Node.js, React, Next, Express, MongoDB,
              Tailwind CSS, SQL, and PHP. Dedicated to constant learning, I aim
              to tackle challenging problems and create innovative solutions.
              With a focus on improving my skills and adapting to the
              ever-evolving tech landscape, I strive to make meaningful
              contributions through coding and development.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
