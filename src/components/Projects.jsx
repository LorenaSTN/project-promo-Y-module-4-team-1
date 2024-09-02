import { Link } from "react-router-dom";
import ButtonHeader from "./ButtonHeader";

function Projects() {
  return (
    <>
      {/* <Link to="/Form">
        <button className="button button--color--blue">NUEVO PROYECTO</button>
      </Link> */}
      <ButtonHeader text="Nuevo Proyecto" />
    </>
  );
}

export default Projects;
