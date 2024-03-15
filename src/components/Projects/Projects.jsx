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
    name: "RASTRO PELUDO (WIP)",
    description:
      "Rastro Peludo is a web app designed to report lost or seen pets. It relies on the users reporting encounters with lost dogs or cats in the street to help the owners find them. It's designed mobile first and the UX and code is all mine. It's being developed using Figma, Next.js 13^, React, Sass and Express.js.",
    webUrl: "https://rastro-peludo.vercel.app/",
    repoUrl: "https://github.com/mercuryeater/rastro-peludo",
  };

  const media2Words = {
    name: "MEDIA TO WORDS COUNTER",
    description:
      "This project is designed to process various types of media that contain audio streams. It generates a transcript of the audio and saves it as a .txt file. Simultaneously, it creates a .csv file that lists all the spoken words from the media, sorted by their frequency of occurrence. It was built using Python, and test made with Pytests.",
    webUrl: "https://www.youtube.com/watch?v=nyCTkY_DHM0",
    repoUrl: "https://github.com/mercuryeater/media2-word-counter",
  };
  return (
    <main className="projects">
      <MainProject
        source={"/RP.JPG"}
        name={rastroPeludo.name}
        description={rastroPeludo.description}
        webUrl={rastroPeludo.webUrl}
        repoUrl={rastroPeludo.repoUrl}
      />
      <MainProject
        source={"/RICA.JPG"}
        name={ricaCab.name}
        description={ricaCab.description}
        webUrl={ricaCab.webUrl}
        repoUrl={ricaCab.repoUrl}
      />
      <MainProject
        source={"/M2W.PNG"}
        name={media2Words.name}
        description={media2Words.description}
        webUrl={media2Words.webUrl}
        repoUrl={media2Words.repoUrl}
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
