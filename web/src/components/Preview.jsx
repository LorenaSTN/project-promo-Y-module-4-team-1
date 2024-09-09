import Reset from "./Reset";
import imageProject from "../images/photonews2.jpeg";
import imageAuthor from "../images/chicamegafono.jpg";
import DetailProject from "./DetailProject";

function Preview(props) {
  return (
    <section className="preview">
      <div
        className="projectImage"
        style={{
          backgroundImage: `url(${props.background || imageProject})`,
          repeat: "repeat",
        }}
      >
        <div className="card__pin"></div>
      </div>
      <DetailProject
        previewProject={props.previewProject}
        imageAuthor={imageAuthor}
      />
      <Reset onClickReset={props.onClickReset} />
    </section>
  );
}

export default Preview;
