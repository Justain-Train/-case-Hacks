import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import teamPhoto from "../../assets/teamphoto.svg";
import suitcase from "../../assets/pixelart/suitcase.png";
import computer from "../../assets/pixelart/computer.png";
import pin from "../../assets/pixelart/pin.png";
import suprisedCasey from "../../assets/pixelart/suprisedcasey.png";
import paper from "../../assets/pixelart/paper.png";

export default function About() {
  const container = useRef<HTMLDivElement | null>(null);
  const headText = useRef<HTMLHeadingElement | null>(null);
  const bodyText = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(() => {
  if (!container.current || !headText.current || !bodyText.current) return;

  gsap.registerPlugin(ScrollTrigger, SplitText);

  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    const split = new SplitText(headText.current, { type: "words" });

    gsap.from(split.words, {
      duration: 1,
      opacity: 0,
      y: -100,
      rotation: "random(-80, 80)",
      stagger: 0.15,
      ease: "back",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "bottom 90%",
      },
    });

    gsap.from(bodyText.current, {
      duration: 1.8,
      opacity: 0,
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "bottom 90%",
        scrub: 2,
      },
    });
  });

  mm.add("(max-width: 767px)", () => {

    gsap.from(headText.current, {
      duration: 1,
      opacity: 0,
      y: 40,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%", 
        toggleActions: "play none none none",
      },
    });

    gsap.from(bodyText.current, {
      duration: 1,
      opacity: 0,
      y: 30,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
    });
  });

  return () => mm.revert(); 
});
  return (
    <div ref={container} className="mt-section" id="about">
      <div
        ref={bodyText}
        className=" relative flex flex-col items-center justify-center"
      >
        <div className="text-3xl font-semibold">
          <h1 ref={headText}>What is [case]Hacks?</h1>
        </div>
        <div className="text-lg md:max-w-[80%] lg:max-w-[69%] 2xl:max-w-[60%] text-center mt-8 leading-[170%] md:leading-[160%]">
          <p>
            Introducing [case]Hacks, Laurier&apos;s newest competition. Formerly
            known as The GoldenHack, our goal is to blend the world of Business
            & Technology by delivering a re-imagined twist to the traditional
            Case-Competition/Hackathon format. [case]Hacks is for everyone,
            designers, engineers, business major. Our team wants to personally
            extend a warm invitation to all of the first-time builders,
            pitchers, and inventors. It takes both courage and ambition to build
            your dream projects, [case]Hacks exists to service YOU, helping
            build skills, networks and lasting memories for years to come.
          </p>
        </div>
        <div className="mt-14">
          <img
            className=" md:h-[25vw] lg:h-[18vw]"
            src={teamPhoto}
            alt="casehacksteamphoto"
          />
        </div>
        <div className="hidden md:block absolute md:left-[15%] md:bottom-[20%] lg:left-[22%] lg:bottom-[30%] opacity-20 hover:opacity-100 transition-opacity ease-in-out">
          <img
            height={125}
            width={125}
            className="rotate-18"
            src={suitcase}
            alt="suitcase"
          />
        </div>
        <div className="hidden md:block absolute md:right-[15%] md:bottom-[20%] lg:right-[22%] lg:bottom-[33%] opacity-20 hover:opacity-100 transition-opacity ease-in-out ">
          <img
            height={125}
            width={125}
            className="rotate-18 relative"
            src={computer}
            alt="computer"
          />
          <img
            height={40}
            width={40}
            className=" md:block rotate-18 absolute md:left-[26%] md:top-[15%] lg:left-[26%] lg:top-[15%] "
            src={suprisedCasey}
            alt="suprisedCasey"
          />
        </div>
        <div className="top-0 left-0 md:block absolute md:left-[3%] md:top-[5%] lg:left-[10%] lg:top-[12%]  opacity-20 hover:opacity-100 transition-opacity ease-in-out ">
          <img
            height={70}
            width={70}
            className="rotate-18 "
            src={pin}
            alt="pin"
          />
        </div>
        <div className="top-0 right-0 md:block absolute md:right-[3%] md:top-[4%] lg:right-[10%] lg:top-[5%] opacity-20 hover:opacity-100 transition-opacity ease-in-out ">
          <img
            height={70}
            width={70}
            className="-rotate-17 "
            src={paper}
            alt="paper"
          />
        </div>
      </div>
    </div>
  );
}
