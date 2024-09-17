//Importar los modulos de NPM que necesito
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//Crear el servidor.
const server = express();

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_admin_Lorena",
    password: "U9%9s?K%8aCC6AC",
    database: "freedb_setProject",
  });
  await connection.connect();
  return connection;
}

//Configurar el servidor.
server.use(cors());
server.use(express.json({ limit: "25mb" }));

server.set("view engine", "ejs");

//Arrancar en un puerto:

const serverPort = 5001;
server.listen(serverPort, () => {
  console.log(`Server listening at: http://localhost:${serverPort}`);
});

server.get("/projects/list", async (req, res) => {
  const connection = await getDBConnection();

  const squlQuery =
    "SELECT * FROM projects, author WHERE projects.fk_author = author.idAuthor";
  const [projectsResult] = await connection.query(squlQuery);

  connection.end();

  res.status(200).json({
    status: true,
    message: projectsResult,
  });
});

server.post("/api/project", async (req, res) => {
  const connection = await getDBConnection();

  const authorQuery =
    "INSERT INTO author (author, job, photo) VALUES (?, ?, ?) ";
  const [authorResult] = await connection.query(authorQuery, [
    req.body.author,
    req.body.job,
    req.body.photo,
  ]);
  const idNewAuthor = authorResult.insertId;

  const projectQuery =
    "INSERT INTO projects (name, slogan, `desc`, technologies, image, repo, demo, fk_author) VALUES(?,?,?,?,?,?,?,?)";
  const [projectsResult] = await connection.query(projectQuery, [
    req.body.name,
    req.body.slogan,
    req.body.desc,
    req.body.technologies,
    req.body.image,
    req.body.repo,
    req.body.demo,
    idNewAuthor,
  ]);

  connection.end();
  res.json({
    success: true,
    cardURL: `http://localhost:5001/project/${projectsResult.insertId}`,
  });
});

server.get("/project/:idProject", async (req, res) => {
  const connection = await getDBConnection();
  const id = req.params.idProject;
  const querySql =
    "SELECT * FROM projects, author WHERE projects.fk_author = author.idAuthor AND projects.idProject = ?";
  const [result] = await connection.query(querySql, [id]);

  connection.end();
  res.render("project", { project: result[0] });
});

// Servidor estático
const staticServerPath = "src/public-react";
server.use(express.static(staticServerPath));

//servidor estatico css
const stylesEngine = "src/public-css";
server.use(express.static(stylesEngine));
