import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandSass,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandPrisma,
} from "@tabler/icons-react";
import { SiPostgresql } from "react-icons/si";
import { RiBlenderLine } from "react-icons/ri";

import Image from "next/image";
import "./Skills.scss";

export default function Skills() {
  return (
    <>
      <main className="skills">
        <div className="skills__frontEnd">
          <h3>| Frontend</h3>
          <div>
            <IconBrandReact size={85} stroke={1} />
            <IconBrandJavascript size={85} stroke={1} />
            <IconBrandTypescript size={85} stroke={1} />
            <IconBrandHtml5 size={85} stroke={1} />
            <IconBrandCss3 size={85} stroke={1} />
            <IconBrandSass size={85} stroke={1} />
            <IconBrandNextjs size={85} stroke={1} />
            <IconBrandTailwind size={85} stroke={1} />
          </div>
        </div>

        <div className="skills__backEnd">
          <h3>| Backend</h3>
          <div>
            <IconBrandNodejs size={85} stroke={1} />
            <IconBrandPrisma size={85} stroke={1} />
            {/* Express */}
            <svg
              width="85px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path
                fill="#d6e4f2"
                d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"
              />
            </svg>
            {/* Postgres */}
            <SiPostgresql size={75} />
            {/* Python */}
            <svg  xmlns="http://www.w3.org/2000/svg"  width="85"   viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" /><path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" /><path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" /><path d="M11 6l0 .01" /><path d="M13 18l0 .01" />
            </svg>
          </div>
        </div>

        <div className="skills__other">
          <h3>| Other</h3>
          <div>
            <Image src="/IconGit.png" alt="gitLogo" width={75} height={75} />
            {/* Blender */}
            <RiBlenderLine size={85}/>
          </div>
        </div>
      </main>
    </>
  );
}
