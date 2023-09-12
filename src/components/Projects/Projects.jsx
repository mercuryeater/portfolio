import MainProject from "./MainProject";
import "./Projects.scss";

export default function Projects() {
  const ricaCab = {
    name: "RICA CAB APP",
    description:
      "Transportation app developed combining React and Express. It connects passengers with registered drivers and fleet owners, offering a straightforward way to request rides and manage transportation schedules. Passengers can easily find and schedule trips, while drivers and fleet owners can efficiently accept requests.",
    webUrl: "https://cab-frontend.vercel.app/",
    repoUrl: "https://github.com/davidenco88/frontend-cab",
    // https://github.com/davidenco88/backend-cab
  };

  const shakeMeet = {
    name: "SHAKEMEET",
    description:
      "ShakeMeet is a web app designed for peer-to-peer connections among users within the same network. Developed using React, Tailwind CSS, and Firebase as the database, it incorporates a STUN server for efficient communication. In the future, the plan is to establish a dedicated STUN server to ensure seamless performance. ",
    webUrl: "https://shakemeet-develop.onrender.com/",
    repoUrl: "https://github.com/mercuryeater/ShakeMeet",
  };
  return (
    <main className="projects">
      <MainProject
        source={"/RICA.JPG"}
        name={ricaCab.name}
        description={ricaCab.description}
        webUrl={ricaCab.webUrl}
        repoUrl={ricaCab.repoUrl}
      />
      <MainProject
        source={"/SM.JPG"}
        name={shakeMeet.name}
        description={shakeMeet.description}
        webUrl={shakeMeet.webUrl}
        repoUrl={shakeMeet.repoUrl}
      />
    </main>
  );
}
