//Importar los modulos de NPM que necesito
const express = require("express");
const cors = require("cors");

//Crear el servidor.
const server = express();

const dataProjects = [
  {
    name: "FACEBOOK",
    slogan: "Better connecting you with the pages and groups you care about",
    technologies: "React, PHP",
    desc: "Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.",
    author: "Mark Zuckerberg",
    job: "Businessman,computer programmer, philanthropist ",
    demo: "https://www.facebook.com/",
    repo: "https://github.com/facebook",
    photo:
      "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
  },
  {
    name: "AMAZON",
    slogan: "Work hard, Have fun, Make history.",
    technologies: "React, Java, MySQL",
    desc: "Amazon.com, Inc., doing business as Amazon, is an American multinational technology company, engaged in e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence",
    author: "Jeff Bezos",
    job: "CEO of Amazon,Investor, Businessperson",
    demo: "https://www.amazon.com",
    repo: "https://github.com/amzn",
    photo:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/Amazon-logo-with-CEO-Jeff-Bezos.jpg",
  },
  {
    name: "NETFLIX",
    slogan: "See what's next",
    technologies: "Python, Node.js, and React",
    desc: "The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages",
    author: "Reed Hastings",
    job: "Entrepreneur,Businessperson",
    demo: "https://www.netflix.com/us-es/",
    repo: "https://github.com/Netflix",
    photo:
      "https://s.yimg.com/ny/api/res/1.2/L941reTczz4VknQGAJeC7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/tomatazos_56/473eb1d680728eca27c5d12b96ec3497",
  },
  {
    name: "Airbnb",
    slogan: "Belong anywhere",
    technologies: "JavaScript, GitHub, React, Java, and MySQL",
    desc: "It is an online marketplace that connects people who want to rent out their homes with people looking for accommodations in specific locales.",
    author: " Brian Chesky",
    job: "Computer scientist,Businessperson",
    demo: "https://www.airbnb.es/",
    repo: "https://github.com/airbnb",
    photo:
      "https://static.startuptalky.com/2021/11/Airbnb-Founders-StartupTalky.jpg",
  },
];

//Configurar el servidor.
server.use(cors());
server.use(express.json({ limit: "25mb" }));

//Arrancar en un puerto:
const serverPort = 5001;
server.listen(serverPort, () => {
  console.log(`Server listening at: http://localhost:${serverPort}`);
});

//Servidor estático
// const staticServer = "./web";
// server.use(express.static(staticServer));

server.get("/projects/list", (req, res) => {
  console.log("info db");
  res.json(dataProjects);
});
