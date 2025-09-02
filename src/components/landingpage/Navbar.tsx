import NavItem from "../ui/NavItem";
import smalllogo from "../../assets/logos/smalllogo.svg";
import SecondaryButton from "../ui/SecondaryButton";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const navRef = useRef<HTMLElement>(null);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.paused(isOpen);
    }

    document.body.style.overflow = isOpen ? "hidden" : "auto";
    document.documentElement.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);


  useGSAP(() => {
    if (!menuRef.current || !linksRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.6, ease: "power3.out" }
      );

      gsap.fromTo(
        linksRef.current.children,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          delay: 0.2,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  useGSAP(() => {
    let lastScroll = 0;
    const nav = navRef.current;
    if (!nav) return;

    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const currentScroll = self.scroll();
        if (currentScroll > lastScroll && currentScroll > 100) {
          gsap.to(nav, { y: "-200%", duration: 0.4, ease: "power2.out" });
        } else {
          gsap.to(nav, { y: "0%", duration: 0.4, ease: "power2.out" });
        }
        lastScroll = currentScroll;
      },
    });
  }, []);

  return (
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 backdrop-blur-md flex justify-between items-center z-[9999] px-[3%] md:px-[5%] lg:px-[9%] 2xl:px-[13%] 3xl:px-[25%] mt-2 md:my-9"
      >
        <div className="flex-1">
          <a href="/" className="inline-block">
            <img src={smalllogo} alt="Logo" />
          </a>
        </div>

        <ul className="md:flex md:flex-1 items-center hidden justify-center text-lg md:space-x-10 lg:space-x-12 font-semibold">
          <NavItem href="#about" label="About Us" />
          <NavItem href="#sponsors" label="Sponsors" />
          <NavItem href="#faq" label="FAQ" />
        </ul>

        <div className="md:flex-1 justify-end hidden md:flex">
          <SecondaryButton label="Director Hiring!" onClick={(e) => {
              e?.preventDefault();
              window.open('https://docs.google.com/forms/d/e/1FAIpQLSeu7DMbr1K5n7CQtc90yryLO0nHTyBNhhb1BS5SSrYq-EBYow/viewform', '_blank')
          }} />
        </div>

        <div className="z-[10000] md:hidden">
          <button
            className="relative flex h-7 w-7 flex-col items-center justify-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`absolute h-[2px] w-7 rounded-full transition-all duration-300 ${
                isOpen
                  ? "translate-y-0 rotate-45 bg-background"
                  : "-translate-y-1 rotate-0 bg-font"
              }`}
            ></span>
            <span
              className={`absolute h-[2px] w-7 rounded-full transition-all duration-300 ${
                isOpen
                  ? "translate-y-0 -rotate-45 bg-background"
                  : "translate-y-1 rotate-0 bg-font"
              }`}
            ></span>
          </button>
        </div>  

        {/* Mobile*/}
        <div
          ref={menuRef}
          className="fixed top-0 left-0 right-0 w-screen h-screen bg-font md:hidden flex flex-col justify-center items-center z-[2000] translate-x-full"
        >
          <ul
            ref={linksRef}
            className="flex flex-col space-y-6 text-lg text-background font-semibold mt-12"
          >
            <NavItem
              href="#about"
              label="About Us"
              onClick={() => setIsOpen(false)}
            />
            <NavItem
              href="#sponsors"
              label="Sponsors"
              onClick={() => setIsOpen(false)}
            />
            <NavItem href="#faq" label="FAQ" onClick={() => setIsOpen(false)} />
            <NavItem
              href=""
              label="Director Hiring!"
              onClick={() => setIsOpen(false)}
            />
          </ul>
        </div>
      </nav>

  );
}
