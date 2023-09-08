import MainProject from "./MainProject";
import "./Projects.scss"

export default function Projects() {

  const ricaCab = {
    name : "RICA CAB APP",
    description : "Rica is a transportation app developed combining React and Express. It connects passengers with registered drivers and fleet owners, offering a straightforward way to request rides and manage transportation schedules. Passengers can easily find and schedule trips, while drivers and fleet owners can efficiently accept requests.",
  }


  return (
    <main className="projects">
      <MainProject source={"/test.JPG"} name={ricaCab.name} description={ricaCab.description} />
    </main>
  );
}
