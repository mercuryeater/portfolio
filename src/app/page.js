import Intro from "@/components/Intro/Intro";
import Skills from "@/components/Skills/Skills.jsx";
import Projects from "@/components/Projects/Projects.jsx";
import Contact from "@/components/Contact/Contact";
import "./page.scss";

export default function Home() {
  return (
    <main className="home">
      <Intro />
      <hr />
      <h2 className="home__titles">Projects</h2>
      <Projects />
      <hr />
      <h2 className="home__titles">Skills</h2>
      <Skills />
      <hr />
      <h2 className="home__titles">Contact me</h2>
      <Contact />
    </main>
  );
}
