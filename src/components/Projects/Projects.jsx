import MainProject from "./MainProject";
import "./Projects.scss";

export default function Projects() {
  const projects = [
    {
      name: "KODBOT (WIP)",
      description:
        "KodBot is an AI-powered Python tutor designed to help Spanish-speaking students. Using technologies like TypeScript, React, Next.js, LangChain, and ChatGPT, KodBot offers real-time code analysis, error correction, clear explanations of Python concepts, code generation, and personalized learning experiences. By providing immediate feedback and tailored guidance, KodBot aims to improve Python learning outcomes for Spanish-speaking students.",
      webUrl: "https://python-tutor2.vercel.app/",
      repoUrl: "https://github.com/mercuryeater/python-tutor",
      source: "/PYBOT.PNG",
    },
    {
      name: "RICA CAB APP",
      description:
        "Transportation app developed combining React sand Express. It connects passengers with registered drivers and fleet owners, offering a straightforward way to request rides and manage transportation schedules. Passengers can easily find and schedule trips, while drivers and fleet owners can efficiently accept requests.",
      webUrl: "https://cab-frontend.vercel.app/",
      repoUrl: "https://github.com/davidenco88/frontend-cab",
      source: "/RICA.JPG",
      // https://github.com/davidenco88/backend-cab
    },
    {
      name: "RASTRO PELUDO (WIP)",
      description:
        "Rastro Peludo is a web app designed to report lost or seen pets. It relies on the users reporting encounters with lost dogs or cats in the street to help the owners find them. It's designed mobile first and the UX and code is all mine. It's being developed using Figma, Next.js 13^, React, Sass and Express.js.",
      webUrl: "https://rastro-peludo.vercel.app/",
      repoUrl: "https://github.com/mercuryeater/rastro-peludo",
      source: "/RP.JPG",
    },
    {
      name: "MEDIA TO WORDS COUNTER",
      description:
        "This project is designed to process various types of media that contain audio streams. It generates a transcript of the audio and saves it as a .txt file. Simultaneously, it creates a .csv file that lists all the spoken words from the media, sorted by their frequency of occurrence. It was built using Python, and test made with Pytests.",
      webUrl: "https://www.youtube.com/watch?v=nyCTkY_DHM0",
      repoUrl: "https://github.com/mercuryeater/media2-word-counter",
      source: "/M2W.PNG",
    },
    {
      name: "SHAKEMEET",
      description:
        "ShakeMeet is a web app designed for peer-to-peer connections among users within the same network. Developed using React, Tailwind CSS, and Firebase as the database, it incorporates a STUN server for efficient communication. In the future, the plan is to establish a dedicated STUN server to ensure seamless performance. ",
      webUrl: "https://shakemeet.onrender.com/",
      repoUrl: "https://github.com/mercuryeater/ShakeMeet",
      source: "/SM.JPG",
    },
  ];

  return (
    <main className="projects">
      {projects.map((project) => (
        <MainProject
          key={project.name}
          source={project.source}
          name={project.name}
          description={project.description}
          webUrl={project.webUrl}
          repoUrl={project.repoUrl}
        />
      ))}
    </main>
  );
}
