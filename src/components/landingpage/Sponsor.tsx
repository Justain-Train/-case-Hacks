import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger, SplitText } from "gsap/all";

import star from "../../assets/pixelart/stars.gif";
import FolderCarousel from "../ui/FolderCarousel";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Sponsor() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const goldenRef = useRef<HTMLSpanElement>(null);

useGSAP(() => {
  if (!sectionRef.current || !goldenRef.current) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.fromTo(
      sectionRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: 3,
        },
      }
    );

    const split = new SplitText(goldenRef.current, { type: "chars" });

    gsap.from(split.chars, {
      y: 150,
      opacity: 0,
      color: "#FFD700",
      duration: 0.8,
      ease: "back.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  });

  mm.add("(max-width: 767px)", () => {
    gsap.from(sectionRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 95%", 
        toggleActions: "play none none none",
      },
    });

    gsap.from(goldenRef.current, {
      y: 40,
      opacity: 0,
      color: "#FFD700",
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
    });
  });

  return () => mm.revert();
});

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="flex flex-col items-center text-center mt-section"
    >
      <div className="relative">
        <h1 className="text-3xl font-semibold">
          Sponsors from Our{" "}
          <span ref={goldenRef} className="inline-block">
            Golden
          </span>{" "}
          Era
        </h1>
        <img
          className="absolute h-15 -top-16 -left-4 md:-left-26 "
          src={star}
          alt=""
        />
        <img
          className="absolute h-15 -top-16 -right-4 md:-right-26"
          src={star}
          alt=""
        />
      </div>

      <div className="text-lg md:max-w-[55%] lg:max-w-[40%] leading-[160%] mt-8">
        <p>
          We're proud to showcase the amazing sponsors who supported us in our
          early years.
        </p>
      </div>
      <div>
        <FolderCarousel />
      </div>
      <div className="md:max-w-[70%] lg:max-w-[60%]">
        <h1 className="text-3xl my-10 font-semibold">
          Interested in becoming a sponsor?
        </h1>
        <div className="text-lg leading-[160%]">
          <p>
            Sponsors are the heart of our hackathon. Driving innovation,
            supporting future entrepreneurs, and shaping the next wave of
            business talent. Gain brand exposure, connect with top students, and
            make a lasting impact. Let's build something great together.
          </p>
          <p className="my-10">
            Want to be part of something <span className="font-bold">big?</span>{" "}
            Get in touch at{" "}
            <span>
              <a
                href="mailto:Corporate@casehacks.ca"
                className="text-primary hover:underline"
              >
                Corporate@casehacks.ca
              </a>
            </span>
          </p>
          <Button
            text="Sponsor [case]Hacks"
            className="py-2 px-5 text-lg"
            onClick={(e) => {
              window.location.href = "mailto:Corporate@casehacks.ca";
              e?.preventDefault();
            }}
          />
        </div>
      </div>
    </section>
  );
}
