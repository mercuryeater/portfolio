import MainProject from "./MainProject";
import "./Projects.scss";

export default function Projects() {
  const ricaCab = {
    name: "RICA CAB APP",
    description:
      "Transportation app developed combining React sand Express. It connects passengers with registered drivers and fleet owners, offering a straightforward way to request rides and manage transportation schedules. Passengers can easily find and schedule trips, while drivers and fleet owners can efficiently accept requests.",
    webUrl: "https://cab-frontend.vercel.app/",
    repoUrl: "https://github.com/davidenco88/frontend-cab",
    // https://github.com/davidenco88/backend-cab
  };

  const shakeMeet = {
    name: "SHAKEMEET",
    description:
      "ShakeMeet is a web app designed for peer-to-peer connections among users within the same network. Developed using React, Tailwind CSS, and Firebase as the database, it incorporates a STUN server for efficient communication. In the future, the plan is to establish a dedicated STUN server to ensure seamless performance. ",
    webUrl: "https://shakemeet.onrender.com/",
    repoUrl: "https://github.com/mercuryeater/ShakeMeet",
  };

  const rastroPeludo = {
    name: "Rastro Peludo",
    description:
      "Rastro Peludo is a web app designed to report lost or seen pets. It realies on the users reporting encounters with lost dogs or cats in the sreet to help the owners find them.",
    webUrl: "http://",
    repoUrl: "https://github.com/mercuryeater/rastro-peludo",
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
      <MainProject
        source={"/RP.JPG"}
        name={rastroPeludo.name}
        description={rastroPeludo.description}
        webUrl={rastroPeludo.webUrl}
        repoUrl={rastroPeludo.repoUrl}
      />
    </main>
  );
}
