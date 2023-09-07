import Image from "next/image";
import "./Projects.scss"

export default function Projects() {
  return (
    <>
    <div className="project">
      <Image className="project__thumb" src="/test.JPG" alt="Test" />
      <h2 className="project__name">Project name</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, quaerat est impedit reprehenderit ipsum beatae explicabo asperiores illo odit quod sequi qui nihil libero temporibus exercitationem consequuntur praesentium quam provident?</p>
    </div>
    </>
  );
}
