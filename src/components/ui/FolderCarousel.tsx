import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState, useEffect } from "react";
import { SPONSORS } from "../../data";
import SponsorFolder from "./SponsorFolder";

export default function FolderCarousel() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef<HTMLDivElement>(null);
  const folderRefs = useRef<HTMLDivElement[]>([]);
  const carouselTimeline = useRef<GSAPTimeline | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setupCarouselPosition();
  }, [currentIndex]);

  const prevIndexRef = useRef<number>(0);

  const setupCarouselPosition = () => {
    if (carouselTimeline.current) carouselTimeline.current.kill();
    carouselTimeline.current = gsap.timeline();

    const total = SPONSORS.length;
    const prevIndex = prevIndexRef.current;

    folderRefs.current.forEach((folder, i) => {
      if (!folder) return;

      // Calculate shortest wrapping distance from current and previous index
      let distance = i - currentIndex;
      if (distance > total / 2) distance -= total;
      if (distance < -total / 2) distance += total;

      let prevDistance = i - prevIndex;
      if (prevDistance > total / 2) prevDistance -= total;
      if (prevDistance < -total / 2) prevDistance += total;

      // If the wrapping logic flipped which side this item is on,
      // snap it instantly to the correct side before animating
      if (Math.sign(distance) !== Math.sign(prevDistance) && Math.abs(distance) > 1) {
        gsap.set(folder, { x: distance * 450 });
      }

      const x = distance * 450;
      const scale = distance === 0 ? 1 : 0.8;
      const opacity = distance === 0 ? 1 : 0.3;
      const z = distance === 0 ? -50 : -100;

      carouselTimeline.current?.to(
        folder,
        { x, scale, opacity, z, duration: 0.8, ease: "power2.out" },
        0
      );
    });

    prevIndexRef.current = currentIndex;
  };

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % SPONSORS.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? SPONSORS.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SPONSORS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className=" w-[100vw] md:w-[1200px] overflow-hidden">
      <div className="relative flex justify-center items-center w-full h-[280px] my-10">
        {SPONSORS.map(({ logo, src, alt }, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) folderRefs.current[i] = el;
            }}
            className="absolute"
          >
            <SponsorFolder logoSrc={logo} alt={alt} src={src} className=" w-[350px] h-[280px]" />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-4 ">
        <button
          onClick={prevSlide}
          className=" hover:bg-button/30 transition-colors ease-in-out duration-200 px-2 py-1 text-sm rounded-2xl mr-3  cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        {SPONSORS.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
              i === currentIndex
                ? "bg-font scale-110"
                : "bg-gray-400 opacity-50"
            }`}
          />
        ))}
        <button
          onClick={nextSlide}
          className=" hover:bg-button/30 transition-colors ease-in-out duration-200 px-2 py-1 text-sm rounded-2xl ml-3  cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
