import "../scss/components/Projects.scss";

function Projects(props) {
  return (
    <section className="projects_section">
      {props.addedProject.map((project, index) => (
        <article key={index} className="card">
          <div className="card__pin"></div>
          <div className="card__pin card__pin--right"></div>
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">Proyecto personal</span>
          </h2>

          <div className="card__autor">
            <div
              className="card__autorPhoto"
              style={{
                backgroundImage: `url(${project.image})`,
                repeat: "repeat",
              }}
            ></div>
            <p className="card__job">{project.job}</p>
            <h3 className="card__name">{project.author}</h3>
          </div>

          <div className="card__project">
            <h3 className="card__name-project">{project.name}</h3>
            <p className="card__slogan">{project.slogan}</p>
            <h3 className="card__descriptionTitle">Descripción del proyecto</h3>
            <p className="card__description">{project.desc}</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{project.technologies}</p>
              <div className="container-icons">
                <a
                  className="icon icon__www"
                  href={project.demo}
                  title="Haz click para ver el proyecto online"
                  target="_blank"
                >
                  <i className="fa-regular fa-globe"></i>
                </a>
                <a
                  className="icon icon__github"
                  href={project.repo}
                  title="Haz click para ver el código del proyecto"
                  target="_blank"
                >
                  <i className="fa-regular fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Projects;
