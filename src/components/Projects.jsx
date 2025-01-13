import React from "react";
import projectsData from "../constants/projectsData.jsx";
import { motion } from "motion/react";

const Projects = () => {
  const projectsArray = Object.values(projectsData);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
      >
        Projects
      </motion.h1>
      <div>
        {projectsArray.map((project, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration:1}}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt=""
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-2 text-neutral-400">{project.description}</p>
              {project.Tech.map((t, i) => (
                <span
                  key={i}
                  className="mb-2 rounded bg-neutral-900 px-2 py-2 text-sm  md:font-medium text-purple-900"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
