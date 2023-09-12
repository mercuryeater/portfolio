import Image from "next/image";
import Link from "next/link";
import { IconBrandGithubFilled, IconWorldWww } from "@tabler/icons-react";
import "./MainProject.scss";

export default function MainProject({
  source,
  name,
  description,
  webUrl,
  repoUrl,
}) {
  const imageStyle = {
    maxWidth: "100%",
    objectFit: "cover",
    maxHeight: "100%",
  };
  return (
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
        <span className="project__texts__name">
          <h2>{name}</h2>
          <Link href={repoUrl} target="_blank">
            <IconBrandGithubFilled size={25} stroke={1} />
          </Link>
          <Link href={webUrl} target="_blank">
            <IconWorldWww size={25} stroke={1} />
          </Link>
        </span>
        <p className="project__texts__description">{description}</p>
      </div>
    </div>
  );
}
