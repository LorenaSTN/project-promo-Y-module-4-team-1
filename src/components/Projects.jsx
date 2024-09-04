import "../scss/components/Projects.scss";
import DetailProject from "./DetailProject";

function Projects(props) {
  return (
    <div className="projects">
      {props.listProjects.map((project) => {
        return <DetailProject key={project.id} previewProject={project} />;
      })}
    </div>
  );
}

export default Projects;
