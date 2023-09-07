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
import Image from "next/image";
import "./Skills.scss";

export default function Skills() {
  return (
    <>
    <h2>Skills</h2>
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
            <svg
              width="85px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path
                fill="white"
                d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="85px"
            >
              <path
                fill="white"
                d="M 35.199219 2.101563 C 33.699219 2.101563 32.398438 2.398438 31.199219 2.699219 C 33.300781 3.597656 34.601563 4.699219 35.300781 5.199219 C 36.902344 6.597656 37.800781 8 39.402344 10.300781 C 39.699219 10.800781 40.199219 11.5 40.5 12.597656 C 40.800781 13.597656 40.800781 14.398438 40.800781 15.199219 C 40.800781 16.300781 40.699219 17.199219 40.597656 18.097656 C 40.5 18.800781 40.5 19.101563 40.402344 19.300781 C 40.402344 19.402344 40.402344 19.5 40.300781 19.699219 C 40.300781 20.199219 40.300781 20.402344 40.402344 20.800781 C 40.402344 21.199219 40.5 21.601563 40.5 22.300781 C 40.601563 23.601563 40.601563 24.5 40.402344 25.597656 L 40.402344 26 C 40.199219 26.898438 40 27.800781 39.5 28.597656 C 39.601563 28.800781 39.699219 28.898438 39.800781 29.097656 C 40.300781 28.398438 40.699219 27.699219 41.097656 26.902344 C 42.300781 24.699219 43 22.800781 43.5 21.402344 C 44.398438 18.800781 44.898438 16.898438 45.199219 15.5 C 45.898438 12.5 46 11.101563 45.699219 9.5 C 45.699219 9 45.5 8.097656 45 7.199219 C 43.898438 5.199219 42.199219 4.300781 41 3.699219 C 40.199219 3.300781 38.097656 2.199219 35.199219 2.101563 Z M 13.535156 2.542969 C 12.382813 2.519531 10.976563 2.648438 9.398438 3.398438 C 8.898438 3.601563 7.398438 4.300781 6.199219 5.898438 C 5.398438 6.898438 4.800781 8.398438 4.5 10.097656 C 4.199219 11.597656 4.097656 13.402344 4.699219 16.800781 C 5.097656 19.199219 5.5 20.800781 6.300781 24.097656 C 6.402344 24.5 7 26.300781 8.300781 30.300781 L 8.398438 30.5 C 8.601563 31.199219 9.199219 32.699219 10.5 34.199219 C 11.398438 35.199219 12.199219 35.800781 12.902344 35.800781 L 13.097656 35.800781 C 14.398438 35.800781 15.300781 34.800781 16.097656 34 C 16.097656 33.898438 18 31.601563 18.699219 30.800781 C 18.597656 30.699219 18.402344 30.699219 18.300781 30.597656 C 17.101563 29.898438 16.199219 28.800781 15.5 27.597656 C 14.300781 25.398438 14.398438 23.199219 14.597656 22.097656 L 14.699219 20.402344 C 14.300781 17.699219 14.402344 15.101563 14.902344 12.5 C 15.300781 10.300781 15.800781 8.101563 17.597656 5.800781 C 18.199219 5 18.898438 4.300781 19.597656 3.800781 C 18 3.101563 16.300781 2.699219 14.597656 2.601563 C 14.273438 2.574219 13.917969 2.550781 13.535156 2.542969 Z M 26.097656 3.398438 C 25.597656 3.398438 25.097656 3.398438 24.597656 3.5 C 22.597656 3.898438 20.699219 5 19.199219 6.898438 C 17.699219 8.800781 17.300781 10.597656 16.902344 12.699219 C 16.699219 13.5 16.699219 14.199219 16.597656 15 C 17.199219 14.5 18 13.898438 19.199219 13.597656 C 19.898438 13.398438 21.699219 12.800781 23.199219 13.699219 C 23.699219 14 24.398438 14.601563 25.097656 16.300781 C 26.597656 20.5 25.101563 24.800781 24.902344 25.199219 C 24.800781 25.597656 24.601563 25.898438 24.5 26.097656 C 24.300781 26.597656 24.101563 27 23.902344 27.800781 C 23.800781 28.5 23.699219 29.101563 23.699219 29.800781 C 24 29.800781 24.300781 29.898438 24.597656 30.097656 C 25.097656 30.597656 25.199219 31.300781 25.300781 31.597656 C 25.5 33.199219 25.5 35.199219 25.5 37.199219 C 25.5 38.800781 25.5 40.300781 25.597656 41.300781 C 25.800781 43.601563 26.5 45.199219 27.5 46 C 28.199219 46.601563 29.097656 46.597656 29.597656 46.699219 L 29.800781 46.699219 C 31.300781 46.699219 33.699219 45.699219 34.597656 44.300781 C 35.097656 43.5 35.300781 42.800781 35.5 41.800781 C 35.601563 41.199219 35.597656 40.902344 35.699219 40.300781 C 35.699219 40 35.800781 39.5 35.800781 38.902344 C 35.800781 38.402344 35.898438 37.800781 36 37.097656 C 36.101563 35.398438 36.398438 33.402344 36.5 32.300781 C 36.601563 31 37.199219 29.898438 37.699219 29.199219 C 37 29.097656 36.300781 28.5 35.902344 27.5 C 35.300781 26.398438 35.199219 26.097656 35.097656 25.597656 C 35 25.199219 34.800781 24.699219 34.097656 23.199219 C 32.597656 19.800781 32.402344 18.800781 32.402344 18 C 32.300781 16.898438 32.199219 15.402344 33.402344 14.402344 C 35.199219 12.800781 37.5 12.902344 38.699219 13.300781 L 38.699219 13.097656 C 38.5 12.300781 38.101563 11.699219 37.800781 11.300781 C 36.300781 9 35.5 7.800781 34.097656 6.601563 C 33.5 6.101563 32 4.898438 29.800781 4.101563 C 28.800781 3.800781 27.597656 3.398438 26.097656 3.398438 Z M 37.152344 15.125 C 36.425781 15.074219 35.5 15.199219 34.699219 15.902344 C 34.300781 16.300781 34.300781 17.101563 34.402344 17.800781 C 34.402344 18.300781 34.5 19 36 22.402344 C 36.699219 24 36.898438 24.5 37 24.902344 C 37.101563 25.300781 37.199219 25.5 37.800781 26.597656 C 37.902344 26.800781 38 27 38.199219 27.199219 C 38.398438 26.898438 38.5 26.398438 38.597656 25.597656 L 38.699219 25.300781 C 38.898438 24.402344 38.800781 23.699219 38.800781 22.5 C 38.800781 21.898438 38.699219 21.5 38.699219 21.199219 C 38.597656 20.699219 38.597656 20.300781 38.597656 19.699219 C 38.398438 19.398438 38.398438 19.300781 38.5 19.097656 C 38.5 18.898438 38.597656 18.601563 38.699219 18 C 38.800781 17.199219 38.902344 16.5 38.902344 15.699219 C 38.699219 15.597656 38.601563 15.5 38.402344 15.402344 C 38.402344 15.402344 37.875 15.175781 37.152344 15.125 Z M 21.515625 15.519531 C 20.878906 15.445313 20.148438 15.652344 19.699219 15.800781 C 18.597656 16.101563 17.902344 16.800781 17.402344 17.199219 C 17.101563 17.5 16.800781 17.800781 16.5 18.199219 C 16.5 18.898438 16.597656 19.601563 16.699219 20.300781 L 16.699219 20.402344 L 16.5 22.402344 C 16.300781 23.300781 16.199219 25 17.199219 26.699219 C 17.699219 27.699219 18.402344 28.5 19.300781 29 C 19.902344 29.398438 20.699219 29.699219 21.597656 29.902344 C 21.597656 29.199219 21.699219 28.398438 21.800781 27.699219 C 22 26.699219 22.199219 26.199219 22.5 25.597656 C 22.601563 25.300781 22.699219 25.101563 22.902344 24.800781 C 23 24.5 24.398438 20.699219 23.097656 17.199219 C 22.800781 16.398438 22.5 15.898438 22.097656 15.699219 C 21.925781 15.597656 21.722656 15.542969 21.515625 15.519531 Z M 36.1875 16.089844 C 36.449219 16.074219 36.699219 16.097656 36.800781 16.199219 C 37.101563 16.398438 36.699219 16.898438 36.597656 17 C 36.5 17.101563 36.300781 17.300781 36 17.402344 C 35.601563 17.5 35.300781 17.199219 35.199219 17.199219 C 35.097656 17.097656 34.800781 16.800781 34.902344 16.5 C 35 16.300781 35.101563 16.300781 35.5 16.199219 C 35.648438 16.148438 35.925781 16.101563 36.1875 16.089844 Z M 21.15625 16.917969 C 21.492188 16.894531 21.773438 17.023438 22 17.097656 C 22.300781 17.199219 22.597656 17.300781 22.597656 17.5 C 22.699219 17.800781 22.402344 18 22.300781 18.097656 C 22 18.398438 21.5 18.402344 21.5 18.402344 C 21 18.402344 20.699219 18.101563 20.5 17.800781 C 20.398438 17.699219 20.300781 17.5 20.402344 17.300781 C 20.5 17.101563 20.699219 17 20.800781 17 C 20.925781 16.949219 21.042969 16.925781 21.15625 16.917969 Z M 39.5 30 C 39 30.699219 38.300781 31.601563 38.199219 32.800781 C 38.199219 33 38.199219 33.101563 38.097656 33.300781 C 38.898438 33.5 39.601563 33.5 40.300781 33.402344 C 41.902344 33.199219 43 32.398438 43.199219 32.199219 C 43.898438 31.699219 44.800781 30.699219 44.597656 30.300781 C 44.5 30.101563 44.199219 30.199219 42.597656 30.300781 C 42.199219 30.300781 41 30.601563 40.199219 30.402344 L 40 30.402344 C 39.800781 30.300781 39.601563 30.199219 39.5 30 Z M 22.097656 32 C 21.898438 32.300781 21.601563 32.5 21.402344 32.699219 C 20.601563 33.199219 19.597656 33.601563 18.597656 33.800781 C 17.699219 34.101563 17.199219 34.101563 17.199219 34.402344 C 17.097656 34.800781 18.097656 35.300781 18.597656 35.5 C 20.300781 36.199219 22 35.800781 22.300781 35.699219 C 22.5 35.597656 23 35.398438 23.5 35.097656 C 23.5 34 23.402344 33 23.300781 32.199219 L 23.300781 32.097656 L 23.199219 32.097656 C 22.898438 32.097656 22.5 32.101563 22.097656 32 Z"
              />
            </svg>
          </div>
        </div>

        <div className="skills__other">
          <h3>| Other</h3>
          <div>
            <Image src="/IconGit.png" alt="gitLogo" width={75} height={75} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              viewBox="0.499 48.118 511.002 415.763"
            >
              <path
                fill="white"
                d="M510.003 279.642c-2.998-21.097-10.305-41.104-21.725-59.459-9.959-16.019-22.738-30.266-37.991-42.375l.041-.038L290.133 54.731a4.569 4.569 0 0 0-.361-.287c-5.326-4.08-12.537-6.325-20.297-6.325-7.77 0-15.263 2.25-21.088 6.338-6.263 4.375-9.843 10.18-10.093 16.359-.229 5.765 2.521 11.312 7.764 15.636 10.31 8.135 20.597 16.447 30.898 24.769 9.997 8.08 20.298 16.401 30.549 24.502l-196.213-.133c-22.439 0-37.718 10.537-40.861 28.178-1.381 7.727 1.056 16.223 6.504 22.73 5.78 6.898 14.172 10.703 23.629 10.703l14.958.01c20.664 0 41.419-.051 62.146-.101l19.766-.046-178.08 131.748-.707.517C8.7 336.953 2.188 347.642.783 358.653c-1.065 8.342.881 15.965 5.63 22.053 5.66 7.258 14.497 11.25 24.885 11.25 10.205 0 20.618-3.867 29.334-10.908l96.166-78.7c-.411 3.843-.91 9.481-.853 13.573.108 6.479 2.188 19.479 5.481 30.033 6.804 21.69 18.265 41.535 34.063 58.963 16.438 18.132 36.458 32.509 59.5 42.722 24.36 10.774 50.547 16.243 77.836 16.243h.253c27.376-.066 53.646-5.622 78.085-16.519 23.08-10.334 43.091-24.769 59.467-42.898 15.778-17.517 27.223-37.395 34.014-59.067a151.124 151.124 0 0 0 6.416-33.003c.839-10.83.478-21.85-1.057-32.753zM334.82 383.601c-60.141 0-108.911-43.627-108.911-97.447 0-53.814 48.771-97.441 108.911-97.441 60.142 0 108.907 43.627 108.907 97.441.002 53.82-48.765 97.447-108.907 97.447zm62.807-106.01c.887 16.063-5.529 30.978-16.796 42.019-11.461 11.248-27.815 18.313-46.103 18.313-18.28 0-34.637-7.065-46.102-18.313-11.262-11.041-17.665-25.954-16.783-42.006.864-15.603 8.475-29.376 19.939-39.128 11.273-9.589 26.41-15.439 42.945-15.439 16.537 0 31.67 5.852 42.944 15.439 11.47 9.752 19.083 23.515 19.956 39.115z"
              />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}
