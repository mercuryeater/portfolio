import Technologies from "@components/Technologies.jsx";
import Projects from "@components/Projects.jsx";
import "./page.css";

export default function Home() {
  return (
    <>
      <main className="aboutMe">
        <section>
          <h1>Federico Cordoba</h1>
          <h3>Full Stack Developer / Visual Artist</h3>
          <div>
            <button>Github</button>
            <button>LinkedIn</button>
          </div>
        </section>
        <section>
          <p>
            Proficient in developing web applications using
            <strong> JavaScript/TypeScript</strong> in <strong> React</strong>{" "}
            and <strong> Node.js</strong>, utilizing <strong> SQL</strong>{" "}
            (Postgres) with Prisma, and <strong> NoSQL</strong> (MongoDB) with
            Mongoose. Experience includes working in small teams following{" "}
            <strong>SCRUM</strong> methodology and implementing{" "}
            <strong> Git Flow</strong> for enhanced action flow and
            communication.
          </p>
        </section>
      </main>
      {/* <Technologies /> */}
      {/* <Projects /> */}
    </>
  );
}
