import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import students_union from "../../assets/sponsorlogos/ssu.svg";
import lazaridis from "../../assets/sponsorlogos/lazaridis.svg";
import PartnersCard from "../ui/PartnersCard";
import purple_bird from "../../assets/pixelart/purple_bird.png";
import white_bird from "../../assets/pixelart/white_bird.png";

export default function Partners() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // desktop animations
      const split = new SplitText(".partners-title", { type: "words" });
      gsap.from(split.words, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".partners-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      // mobile animations
      gsap.from(".partners-title", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".partners-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // cards animation
    gsap.from(".partners-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".partners-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    return () => mm.revert();
  });

  const partners = [
    {
      logo: <img src={students_union} alt="Students Union Logo" className="h-full object-contain"/>,
      className: "border-b-[#25358D]",
      bird_position: "top-left" as const,
      pixel_bird: <img src={white_bird} alt="White Bird" className="w-18 h-18 object-contain" />
    },
    {
      logo: <img src={lazaridis} alt="Lazaridis Logo" className="h-full object-contain"/>,
      className: "border-b-[#330072]",
      bird_position: "bottom-right" as const,
      pixel_bird: <img src={purple_bird} alt="Purple Bird" className="w-16 h-16 object-contain" />
    },
  ];

  return (
    <section className="relative mt-30 px-[3%] md:px-[5%] lg:px-[9%] partners-section">
      <div className="text-center mb-12">
        <h2 className="partners-title text-3xl font-semibold text-[#52443c]">
          Our Partners
        </h2>
      </div>

      {/* Grid of partner cards */}
      <div className="grid gap-20 sm:grid-cols-2 max-w-4xl mx-auto mb-12">
        {partners.map((partner, index) => (
          <div key={index} className="partners-card">
            <PartnersCard
              logo={partner.logo}
              bird_position={partner.bird_position}
              className={partner.className}
              pixel_bird={partner.pixel_bird}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
