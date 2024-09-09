//Importar los modulos de NPM que necesito
const express = require("express");
const cors = require("cors");

//Crear el servidor.
const server = express();

const dataProjects = [
  {
    name: "FACEBOOK",
    slogan: "Conectándote mejor con las páginas y grupos que te interesan",
    technologies: "React, PHP",
    desc: "Conéctate con amigos, familiares y otras personas que conoces. Comparte fotos y vídeos, envía mensajes y recibe actualizaciones.",
    author: "Mark Zuckerberg",
    job: "Programador informático ",
    demo: "https://www.facebook.com/",
    repo: "https://github.com/facebook",
    photo:
      "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
  },
  {
    name: "AMAZON",
    slogan: "Trabaja duro, diviértete, haz historia.",
    technologies: "React, Java, MySQL",
    desc: "Amazon.com, Inc., que opera como Amazon, es una empresa de tecnología multinacional estadounidense que se dedica al comercio electrónico, la computación en la nube, la publicidad en línea, la transmisión digital y la inteligencia artificial.",
    author: "Jeff Bezos",
    job: "Inversor, Empresario",
    demo: "https://www.amazon.com",
    repo: "https://github.com/amzn",
    photo:
      "https://s1.abcstatics.com/abc/www/multimedia/economia/2022/11/14/jeff-bezos-dos-R6qfA3h8JvbvrOUThLhOl2L-1200x840@abc.jpg",
  },
  {
    name: "NETFLIX",
    slogan: "Mira lo que sigue",
    technologies: "Python, Node.js, and React",
    desc: "El servicio distribuye principalmente películas y programas de televisión originales y adquiridos de varios géneros, y está disponible internacionalmente en varios idiomas.",
    author: "Reed Hastings",
    job: "Emprendedor, Empresario",
    demo: "https://www.netflix.com/us-es/",
    repo: "https://github.com/Netflix",
    photo:
      "https://static.ffx.io/images/$zoom_0.9966%2C$multiply_0.5855%2C$ratio_1%2C$width_1059%2C$x_412%2C$y_0/t_crop_custom/q_86%2Cf_auto/bf34f87d48de29657936871e250036288ee88b6b",
  },
  {
    name: "Airbnb",
    slogan: "Pertenece a cualquier lugar",
    technologies: "JavaScript, GitHub, React, Java, and MySQL",
    desc: "Es un mercado en línea que conecta a personas que desean alquilar sus casas con personas que buscan alojamiento en lugares específicos.",
    author: "Brian Chesky",
    job: "Informático, Empresario",
    demo: "https://www.airbnb.es/",
    repo: "https://github.com/airbnb",
    photo:
      "https://imageio.forbes.com/specials-images/imageserve/5d8ac4ab22254b0008e16383/0x0.jpg?format=jpg&crop=2407,2409,x719,y857,safe&height=416&width=416&fit=bounds",
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
