import Image from "next/image";
import "./MainProject.scss"

export default function MainProject({source, name, description}) {

  const imageStyle ={
    width: "100%",
    objectFit : 'cover',
    position : 'relative',
    height : 'auto',
  }
  return (
    <div className="project">
      <div className="project__thumb" >
        <Image src={source} alt="Test" width={959} height={516} style={imageStyle}/>
      </div>
      <div className="project__texts">
        <h2 className="project__name">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
