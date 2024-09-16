import "../scss/components/Modal.scss";
import { Link } from "react-router-dom";

function Modal(props) {
  const isError = Boolean(props.errorMessage);

  return (
    <div>
      <div className="modal">
        <div className="modal-postit">
          <h1 className="modal-title">
            {isError ? "Error" : "¡Tu tarjeta ha sido creada!"}
          </h1>

          {isError ? (
            <>
              <p className="modal-text">{props.errorMessage}</p>
              <Link to="/form" className="modal-link">
                Volver al formulario
              </Link>
            </>
          ) : (
            <>
              <p className="modal-text">
                Puedes verla entrando <a href={props.cardUrl}>aquí</a>
              </p>
              <Link to="/form" className="modal-link">
                Volver al formulario
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
