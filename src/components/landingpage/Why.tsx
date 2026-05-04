
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger, SplitText } from "gsap/all"
import Briefcase from "../ui/Briefcase"
import person from "../../assets/symbols/person.svg"

const briefcaseCards = [
  {
    title: "$2000+",
    description: "Prize Pool",
    body: "Compete for a chance to win amazing cash prizes.",
    rotation: -10,
  },
  {
    title: "Get Hired",
    description: "",
    icon: person,
    body: "Impress on-site recruiters and unlock a fast-tracked path into their hiring pipeline.",
    rotation: 2,
  },
  {
    title: "Build Your Network",
    description: "",
    body: "Connect with industry professionals and like-minded peers to build meaningful, lasting relationships.",
    rotation: 8,
  },
]

export default function Why() {
  const container = useRef<HTMLDivElement | null>(null)
  const headText = useRef<HTMLHeadingElement | null>(null)
  const bodyText = useRef<HTMLDivElement | null>(null)

  gsap.registerPlugin(ScrollTrigger, SplitText)

  useGSAP(() => {
    if (!container.current || !headText.current || !bodyText.current) return

    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {
      const split = new SplitText(headText.current, { type: "words" })

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
      })

      gsap.from(bodyText.current, {
        duration: 1.8,
        opacity: 0,
        y: 40,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: 2,
        },
      })
    })

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
      })

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
      })
    })

    return () => mm.revert()
  })

  return (
    <section ref={container} className="mt-section" id="why">
      <div className="mx-auto w-full max-w-full" ref={bodyText}>
        <div className="text-center">
          <h2 ref={headText} className="text-3xl font-semibold text-[#52443c]">
            Why Apply to [case]Hacks?
          </h2>
        </div>

        <div className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pointer-events-none hidden lg:block absolute left-[33.33%] top-10 h-[calc(100%-2.5rem)] w-px bg-[#E8C766]/80" />
          <div className="pointer-events-none hidden lg:block absolute left-[66.66%] top-10 h-[calc(100%-2.5rem)] w-px bg-[#E8C766]/80" />
          {briefcaseCards.map((card, index) => (
            <div key={index} className="flex flex-col items-center gap-15 text-center">
              <Briefcase
                title={card.title}
                description={card.description}
                icon={card.icon}
                rotation={card.rotation}
              />
              <p className="max-w-sm text-lg leading-7 text-[#52443c]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}