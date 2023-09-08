import Image from "next/image";
import Link from "next/link";
import "./MainProject.scss";

export default function MainProject({ source, name, description, url }) {
  const imageStyle = {
    maxWidth: "100%",
    objectFit: "cover",
    maxHeight: "100%",
  };
  return (
    <Link className="link" href={url} target="_blank">
      <div className="project">
        <div className="project__thumb">
          <Image
            src={source}
            alt="Test"
            width={959}
            height={516}
            style={imageStyle}
          />
        </div>
        <div className="project__texts">
          <h2 className="project__texts__name">{name}</h2>
          <p className="project__texts__description">{description}</p>
        </div>
      </div>
    </Link>
  );
}
