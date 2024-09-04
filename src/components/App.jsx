import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";
import Title from "../images/titulo.png";
import localStorage from "../services/localStorage";
import Modal from "./Modal";
import { Routes, Route, useNavigate } from "react-router-dom";
import Projects from "./Projects";
import ButtonHeader from "./ButtonHeader";

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
  const [listProjects, setListProjects] = useState([
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
  ]);

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

    console.log(project);
    fetch("https://dev.adalab.es/api/projectCard", {
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
    console.log("click");
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
        </Routes>
        {/* {(cardUrl || error) && <Modal errorMessage={error} cardUrl={cardUrl} />} */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
