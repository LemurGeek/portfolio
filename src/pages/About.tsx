import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import lemur from "../assets/img/lemur.png";
import { skillsData } from "../assets/data/data";
import { ISkill } from "../shared/interfaces/skills.interface";

const About: React.FC = () => {
  const [skills, setSkills] = React.useState<Array<ISkill>>(skillsData);

  const openCV = () => {
    window.open("/Marcello_Calvo_Resume_CV.pdf", "_blank");
  };

  const titleItem = useRef<HTMLHeadingElement | null>(null);
  const lemurItem = useRef<HTMLImageElement | null>(null);
  const pAboutItem = useRef<HTMLDivElement | null>(null);
  const skillsTitleItem = useRef<HTMLHeadingElement | null>(null);
  const skillsItem = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      titleItem.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        ease: "back.out(1.7)",
        duration: 1,
      }
    );

    gsap.fromTo(
      lemurItem.current,
      { opacity: -3 },
      {
        opacity: 1,
        ease: "slow",
        duration: 1,
      }
    );

    gsap.fromTo(
      pAboutItem.current,
      { opacity: 0, y: 100 },
      { opacity: 1, delay: 0.4, y: 0, ease: "expo.out", duration: 1 }
    );

    gsap.fromTo(
      skillsTitleItem.current,
      { opacity: 0, x: -150 },
      { opacity: 1, delay: 0.8, x: 0, ease: "expo.out", duration: 1 }
    );

    gsap.fromTo(
      skillsItem.current,
      { opacity: 0, y: 100 },
      { opacity: 1, delay: 0.4, y: 0, ease: "expo.out", duration: 1 }
    );
  }, []);

  return (
    <section className="flex flex-col flex-grow my-28 lg:my-36 px-8 lg:px-72 text-eerie_black">
      <div className="flex justify-center">
        <img
          ref={lemurItem}
          src={lemur}
          alt=""
          className="absolute top-32 lg:top-36 left-40 md:left-[23rem] lg:left-[47.5%] rounded-full w-32 lg:w-64 h-auto"
        />
        <h1
          ref={titleItem}
          className="relative text-5xl lg:text-9xl text-rock_blue mb-12 lg:mb-24"
        >
          <span className="absolute -left-6 lg:static">ABOUT</span>{" "}
          <span className="ml-56 lg:ml-32">ME</span>
        </h1>
      </div>
      <div ref={pAboutItem} className="lg:text-2xl font-light my-5">
        <p>
          Hey, I’m <span className="font-normal">Marcello</span>. A{" "}
          <span className="font-normal">full stack software developer</span>{" "}
          based in Costa Rica, with knowledge on web accessibility, web design,
          agile methodologies, development frameworks, used to work in a team,
          responsible, versatile, fast learner with a fascination for interface
          design and user experience, currently interested in creative coding.
        </p>
        <p className="pt-7">
          When I’m not coding, you can find me playing videogames, watching
          movies, building mechanical keebs, and doing pixel art.
        </p>
      </div>
      <div ref={skillsItem}>
        <div className="lg:text-2xl font-light my-7">
          <h2 ref={skillsTitleItem} className="font-normal italic text-5xl">
            Skills
          </h2>
          <p className="py-10">
            A lot of my profesional projects were made in Angular 5+, and API
            REST services with Node and Loopback 3 as framework, nevertheless
            I’m always open to learn new technologies and knowledge to improve
            my skills.
          </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-6 justify-center my-10 gap-16 lg:gap-24">
          {skills.map((s) => (
            <div
              key={s.id}
              className="flex flex-col justify-center text-center gap-y-5 w-16 h-16 lg:w-24 lg:h-24"
            >
              <img src={`/skills/${s.img}`} alt="" className="w-fit h-fit" />
              <span className="lg:text-2xl font-light">{s.name}</span>
            </div>
          ))}
        </div>
        <div className="lg:text-2xl font-light my-7">
          <p className="py-10">
            These are mainly my skill set, at least those are my currently
            focus. Also, I have a bit of knowledge of Oracle, Java, Python, C,
            C++, C#, PHP and others. But I’m a little rusty on those.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={openCV}
            className="text-lg lg:text-xl font-light px-10 py-1 border-ochre_orange border-2 rounded-full hover:bg-ochre_orange hover:text-pearl_bush"
          >
            Resume/CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
