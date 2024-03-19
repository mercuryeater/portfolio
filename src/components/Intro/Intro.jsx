import { IconBrandGithubFilled, IconBrandLinkedin } from "@tabler/icons-react";
import "./Intro.scss";

export default function Intro() {
  return (
    <main className="intro">
      <section className="intro__nameInfo">
        <h1>Federico Cordoba</h1>
        <h3>Full Stack Developer / Visual Artist</h3>
        <div className="intro__nameInfo__buttons">
          <a href="https://github.com/mercuryeater" target="_blank">
            <IconBrandGithubFilled />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/federico-alejandro-cordoba-romero-7b898816a/"
            target="_blank"
          >
            <IconBrandLinkedin />
            LinkedIn
          </a>
        </div>
      </section>

      <p className="intro__description">
        Proficient in developing web applications using
        <strong> JavaScript/TypeScript</strong> in <strong> React</strong> and{" "}
        <strong> Node.js</strong>, using <strong> SQL</strong> (Postgres)
        with Prisma, and <strong> NoSQL</strong> (MongoDB) with Mongoose. Strong <strong>Python</strong> skills, experience automating stuff, doing Flask servers and using  <strong>Keras</strong>.
        Experience includes working in small teams following{" "}
        <strong>SCRUM</strong> methodology and implementing{" "}
        <strong> Git Flow</strong> for enhanced action flow and communication.
      </p>
    </main>
  );
}
