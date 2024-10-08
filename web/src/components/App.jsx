import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";
import Title from "../images/titulo.png";
import localStorage from "../services/localStorage";
import Modal from "./Modal";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  matchPath,
  useParams,
} from "react-router-dom";
import Projects from "./Projects";
import ButtonHeader from "./ButtonHeader";
import RouteProject from "./RouteProject";

function App() {
  const navigate = useNavigate();
  // FORMULARIO Y TARJETA DE PREVISUALIZACION
  const lorem =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolore sed corporis non labore praesentium dignissimos!";
  const [project, setProject] = useState(
    localStorage.get("projectInput", {
      name: "",
      slogan: "",
      technologies: "",
      desc: "",
      author: "",
      job: "",
      demo: "",
      repo: "",
      image: "",
      photo: "",
    })
  );

  const [cardUrl, setCardUrl] = useState("");
  const [error, setError] = useState(null);
  const [listProjects, setListProjects] = useState([]);
  const URL = "https://setproject.onrender.com";
  const localHost = "http://localhost:5001";

  useEffect(() => {
    fetch(`${URL}/projects/list`)
      .then((response) => response.json())
      .then((data) => {
        setListProjects(data.message);
      });
  }, []);

  function changeValue(value, id) {
    setProject({
      ...project,
      [id]: value,
    });
  }

  useEffect(() => {
    localStorage.set("projectInput", project);
  }, [project]);

  //BOTON AÑADIR IMAGEN: (proyecto)
  const fr = new FileReader();

  function handleImageProject(e) {
    fr.onload = () => {
      if (fr.result && typeof fr.result === "string") {
        const updatedProject = { ...project, image: fr.result.toString() };
        setProject(updatedProject);
      }
    };
    fr.readAsDataURL(e.target.files[0]);
  }

  function handlePhotoUser(e) {
    fr.onload = () => {
      if (fr.result && typeof fr.result === "string") {
        const updatedProject = { ...project, photo: fr.result.toString() };
        setProject(updatedProject);
      }
    };
    fr.readAsDataURL(e.target.files[0]);
  }

  function handleSaveProject() {
    if (
      !project.name ||
      !project.slogan ||
      !project.technologies ||
      !project.desc ||
      !project.author ||
      !project.job ||
      !project.demo ||
      !project.repo ||
      !project.image ||
      !project.photo
    ) {
      setError("Todos los campos son obligatorios.");
      navigate("/postit");
      return;
    }

    fetch(`${URL}/api/project`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error de petición al servidor: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCardUrl(data.cardURL);
        setError(null); // Resetea el error en caso de éxito
        navigate("/postit");
      })
      .catch((error) => {
        console.error("Error de petición al servidor:", error);
        setError(
          "Hubo un error al enviar la petición. Por favor, intentalo de nuevo."
        );
        navigate("/postit");
      });
  }

  //BOTON DE RESET
  function handleClickReset() {
    setProject({
      name: "",
      slogan: "",
      technologies: "",
      desc: "",
      author: "",
      job: "",
      demo: "",
      repo: "",
      image: "",
      photo: "",
    });
    localStorage.clear();
  }

  const { pathname } = useLocation();
  const routeData = matchPath("/:nameProject", pathname);
  const nameProject = routeData !== null ? routeData.params.nameProject : null;

  const normalizeString = (str) => {
    return str ? str.trim().toLowerCase() : ""; // Evitar error si str es null o undefined
  };

  const projectSelected = listProjects.find(
    (proj) => normalizeString(proj.name) === normalizeString(nameProject)
  );

  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="hero">
          <img className="hero__title" src={Title} alt="setProject" />
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>
          <ButtonHeader />
        </section>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Projects listProjects={listProjects} />
              </>
            }
          />

          <Route
            path="/form"
            element={
              <>
                <Preview
                  previewProject={project}
                  background={project.image}
                  photo={project.photo}
                  lorem={lorem}
                  onClickReset={handleClickReset}
                />
                <Form
                  previewProject={project}
                  onChangeForm={changeValue}
                  onChangeImageProject={handleImageProject}
                  onChangePhotoUser={handlePhotoUser}
                  onSubmitProject={handleSaveProject}
                />
              </>
            }
          />

          <Route
            path="/postit"
            element={<Modal errorMessage={error} cardUrl={cardUrl} />}
          ></Route>

          <Route
            path="/:nameProject"
            element={<RouteProject listProjects={projectSelected} />}
          ></Route>
        </Routes>
        {/* {(cardUrl || error) && <Modal errorMessage={error} cardUrl={cardUrl} />} */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
