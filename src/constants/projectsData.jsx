import blog from "../assets/blog.png";
import chatBot from "../assets/chat-bot.png";
import Sync from "../assets/Sync.png";
import ecommerce from "../assets/ecommerce.png";
import sociogram from "../assets/sociogram.png";
import mfa from "../assets/MFA.webp";

const projects = {
  blogApp: {
    title: "Blog App (MERN Stack):",
    image: blog,
    description:
      "A full-featured responsive blog application built using the MERN stack. Features include creating, reading, updating posts, commenting functionality, and an intuitive user interface.",
    Tech: ["React.js", "Node.js", "Express.js", "Mongodb"],
  },

  aiChatBot: {
    title: "AI Chat Bot (MERN Stack with Gemini AI):",
    image: chatBot,
    description:
      "An intelligent chatbot app powered by Gemini AI and the MERN stack. Key features include asking questions, image analysis, and robust authentication for secure access using clerk.",
    Tech: ["React", "Node.js", "Express.js", "Mongodb", "Gemini"],
  },
  ecommerceApp: {
    title: "E-commerce Platform (MERN Stack):",
    image: ecommerce,
    description:
      "A fully functional e-commerce application built using the MERN stack. Features include product listings, search and filtering, cart functionality, secure checkout process, and a responsive UI.",
    Tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },

  chatApplication: {
    title: "Real-time Chat App (MERN + Socket.io):",
    image: Sync,
    description:
      "A real-time chat application enabling instant messaging between users. Built with the MERN stack and Socket.io, it supports group and private messaging with a sleek, user-friendly design.",
    Tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
  },
  mfaApp: {
    title: "Multi-Factor Authentication App (MERN Stack):",
    image: mfa,
    description:
      "A secure MERN stack application that implements Multi-Factor Authentication (MFA). It ensures enhanced login protection using one-time passwords (OTP), email verification, and strong session control.",
    Tech: ["React.js", "Node.js", "Express.js", "MongoDB", "OTP"],
  },

  socialMediaApp: {
    title: "Social Media Platform (MERN Stack):",
    image: sociogram,
    description:
      "A modern and responsive social media app with features like posting, liking, commenting, following users, and real-time updates. Built using the MERN stack and follows clean architecture.",
    Tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
  },
};

export default projects;
