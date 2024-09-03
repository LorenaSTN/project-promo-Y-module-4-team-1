import "../scss/components/Projects.scss";

function Projects() {
  return (
    <section className="projects_section">
      <article className="card">
        <div className="card__pin"></div>
        <div className="card__pin card__pin--right"></div>
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text"></span>
        </h2>

        <div className="card__autor">
          <div
            className="card__autorPhoto"
            style={{
              backgroundImage: ``,
              repeat: "repeat",
            }}
          ></div>
          <p className="card__job"></p>
          <h3 className="card__name"></h3>
        </div>

        <div className="card__project">
          <h3 className="card__name-project"></h3>
          <p className="card__slogan"></p>
          <h3 className="card__descriptionTitle"></h3>
          <p className="card__description"></p>

          <div className="card__technicalInfo">
            <p className="card__technologies"></p>
            <div className="container-icons">
              <a
                className="icon icon__www"
                href=""
                title="Haz click para ver el proyecto online"
                target="_blank"
              >
                <i className="fa-regular fa-globe"></i>
              </a>
              <a
                className="icon icon__github"
                href=""
                title="Haz click para ver el código del proyecto"
                target="_blank"
              >
                <i className="fa-regular fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;
