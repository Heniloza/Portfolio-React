import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <motion.h6
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium md:absolute md:top-52 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent px-4 sm:px-8 md:px-0"
          >
            Hello, My Name is
          </motion.h6>
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl tracking-tight lg:mt-16 lg:text-8xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent font-bold"
            >
              Henil Shrimali
            </motion.h1>
            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500  to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent font-semibold"
            >
              I’m{" "}
              <span>
                <TypeAnimation
                  sequence={["Coder", 2000, "Developer", 200, "Learner", 2000]}
                  wrapper="span"
                  speed={30}
                  style={{ display: "inline" }}
                  repeat={Infinity}
                />
              </span>
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              Hi! I'm a passionate Full Stack Developer with a knack for
              building dynamic and user-friendly web applications. With
              expertise in Type Script, MongoDB, Express.js, React.js, Next.js,
              and Node.js, I enjoy creating seamless digital experiences that
              merge design and functionality.My ultimate goal is to leverage my
              expertise to create innovative solutions that address real-world
              challenges.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:h-[400px] rounded-lg"
              src="/profile2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
