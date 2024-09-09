//Importar los modulos de NPM que necesito
const express = require("express");
const cors = require("cors");

//Crear el servidor.
const server = express();

//Configurar el servidor.
server.use(cors());
server.use(express.json({ limit: "25mb" }));

//Arrancar en un puerto:
const serverPort = 5001;
server.listen(serverPort, () => {
  console.log(`Server listening at: http://localhost:${serverPort}`);
});

// //Servidor estático
// const staticServer = "./web";
// server.use(express.static(staticServer));
