import { Link, useLocation } from "react-router-dom";

function ButtonHeader() {
  //obtenemos ruta actual con useLocation()
  const location = useLocation();

  //segun la ruta en la que estemos, el nombre tendrá un botón u otro
  const buttonText =
    location.pathname === "/" ? "Nuevo proyecto" : "Ver proyectos";

  //a donde nos enlaza cada uno dependendiendo de la ruta en la que estemos
  const linkTo = location.pathname === "/" ? "/form" : "/";

  return (
    <Link className="button" to={linkTo}>
      {buttonText}
    </Link>
  );
}

export default ButtonHeader;
