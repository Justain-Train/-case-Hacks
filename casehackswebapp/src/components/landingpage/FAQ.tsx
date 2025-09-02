import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import FAQTab from "../ui/FAQTab";
import { FAQDATA } from "../../data";
import faqs from "../../assets/pixelart/faqs.png";
import faqsmobile from "../../assets/pixelart/faqsMobile.png";
import caseyreading from "../../assets/pixelart/caseyreading.png";

export default function FAQ() {
  const faqGrid = useRef<HTMLDivElement>(null);
  const faqTitle = useRef<HTMLHeadingElement>(null);
  const caseyImg = useRef<HTMLImageElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: faqGrid.current,
        start: "top 80%", 
        end: "bottom 70%",
        scrub: true

        
      },
    });

 
    tl.from(faqTitle.current, {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from(caseyImg.current, {
      opacity: 0,
      x: -40,
      rotate: -10,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: faqGrid.current,
        start: "top 80%",
        end: "bottom 30%",
        scrub: 1
      }
    }, "<"); // 

    tl.from(
      faqGrid.current?.children || [],
      {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15, 
      },
      "-=0.2" 
    );
  });

  return (
    <section id="faq" className="flex flex-col items-center justify-center mt-section">
      <div className="w-full 2xl:w-[80%]">
        <div className="mb-8">
          <h1 ref={faqTitle} className="text-3xl font-semibold text-center">
            FAQs
          </h1>
        </div>
        <div className="relative">
          <img
            ref={caseyImg}
            className="[image-rendering:pixelated] absolute w-30 -top-23 md:w-39 md:-top-31 left-5 md:left-15 -z-100"
            src={caseyreading}
            alt="casey_reading"
          />
          <img
            className="w-full mb-4 [image-rendering:pixelated] hidden md:block"
            src={faqs}
            alt="faqs"
          />
          <img
            className="w-full mb-4 [image-rendering:pixelated] md:hidden"
            src={faqsmobile}
            alt="faqs_mobile"
          />
          <div ref={faqGrid} className="grid grid-cols-1 gap-9 md:grid-cols-2 mt-8">
            {FAQDATA.map((item, index) => (
              <FAQTab key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

