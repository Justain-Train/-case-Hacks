import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import scotiabank from "../../assets/sponsorlogos/scotiabank.svg";
import MainSponsorCard from "../ui/MainSponsorCard";
import spotlight from "../../assets/pixelart/spotlight.png";

export default function MainSponsor() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // desktop animations
      const split = new SplitText(".main-sponsor-title", { type: "words" });
      gsap.from(split.words, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".main-sponsor-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      // mobile animations
      gsap.from(".main-sponsor-title", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".main-sponsor-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });


    // card animation
    gsap.from(".main-sponsor-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".main-sponsor-section",
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    return () => mm.revert();
  });

  return (
    <section  id="sponsors" className="relative mt-section px-[3%] md:px-[5%] lg:px-[9%] main-sponsor-section">
      <div className="text-center mb-60">
        <h2 className="main-sponsor-title text-3xl font-semibold text-[#52443c]">
          Main Sponsor
        </h2>
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="main-sponsor-card absolute scale-x-[-1] -left-25 -top-60 hidden lg:block">
          <img
            src={spotlight}
            alt="Spotlight left"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="main-sponsor-card absolute -right-25 -top-60 hidden lg:block">
          <img
            src={spotlight}
            alt="Spotlight right"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative z-10 flex justify-center">
          <div className="main-sponsor-card">
            <MainSponsorCard
              title="Powering the next generation of innovators"
              description="The offical sponsor of case[Hacks], Scotiabank is committed to empowering students through innovation, collaboration, and access to real-world opportunities"
              logo={<img src={scotiabank} alt="Scotiabank Logo" className="h-full object-contain" />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
  