function RouteProject(props) {
  console.log(props.listProjects);

  return (
    <section className="preview route">
      <div
        className="projectImage image-project-route"
        style={{
          backgroundImage: `url(${props.listProjects.image})`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="card__pin"></div>
      </div>
      <article className="card route-card">
        <div className="card__pin"></div>
        <div className="card__pin card__pin--right"></div>
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">Proyecto personal</span>
        </h2>
        <div className="card__autor">
          <div
            className="card__autorPhoto"
            style={{
              backgroundImage: `url(${props.listProjects.photo})`,
              backgroundRepeat: "repeat",
            }}
          ></div>
          <p className="card__job">{props.listProjects.job}</p>
          <h3 className="card__name">{props.listProjects.author}</h3>
        </div>
        <div className="card__project">
          <h3 className="card__name-project">{props.listProjects.name}</h3>
          <p className="card__slogan">{props.listProjects.slogan}</p>
          <h3 className="card__descriptionTitle">Descripción del proyecto</h3>
          <p className="card__description">{props.listProjects.desc}</p>
          <div className="card__technicalInfo">
            <p className="card__technologies">
              {props.listProjects.technologies}
            </p>
            <div className="container-icons">
              <a
                className="icon icon__www"
                href={props.listProjects.demo}
                title="Haz click para ver el proyecto online"
                target="_blank"
              >
                <i className="fa-regular fa-globe"></i>
              </a>
              <a
                className="icon icon__github"
                href={props.listProjects.repo}
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

export default RouteProject;
