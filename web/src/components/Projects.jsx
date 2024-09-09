import "../scss/components/Projects.scss";
import DetailProject from "./DetailProject";

function Projects(props) {
  return (
    <div className="projects">
      {props.listProjects.map((project, index) => {
        return <DetailProject key={index} previewProject={project} />;
      })}
    </div>
  );
}

export default Projects;
