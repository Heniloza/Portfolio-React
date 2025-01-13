import blog from '../assets/blog.png'
import chatBot from '../assets/chat-bot.png'

const projects = {
  
  blogApp: {
    title: "Blog App (MERN Stack):",
    image: blog,
    description:
      "A full-featured responsive blog application built using the MERN stack. Features include creating, reading, updating posts, commenting functionality, and an intuitive user interface.",
      Tech:["React.js","Node.js","Express.js","Mongodb"],
  },


  aiChatBot: {
    title: "AI Chat Bot (MERN Stack with Gemini AI):",
    image:chatBot,
    description:
      "An intelligent chatbot app powered by Gemini AI and the MERN stack. Key features include asking questions, image analysis, and robust authentication for secure access using clerk.",
      Tech:["React","Node.js","Express.js","Mongodb","Gemini"]
  },

};

export default projects;
