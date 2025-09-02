import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type FAQTabProps = {
  question: string;
  answer: string;
};

export default function FAQTab({ question, answer }: FAQTabProps) {
  gsap.registerPlugin(useGSAP);

  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="group border-b-4 border-[#C3BCC9] pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center text-rg md:px-[10px] lg:text-lg font-medium px-[15px] py-2 rounded-lg hover:bg-button/40 transition hover:rounded-lg hover:ease-out duration-300 active:duration-100 cursor-pointer"
      >
        <p>{question}</p>
        <span
          className={`ml-auto text-3xl transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div ref={contentRef} className="overflow-hidden h-0">
        <p className="text-rg leading-[160%] px-[15px] pb-2">{answer}</p>
      </div>
    </div>
  );
}
