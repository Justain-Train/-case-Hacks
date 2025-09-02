import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin, ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { useRef, useCallback, useState, useMemo } from "react";
import { HashLink } from "react-router-hash-link";

import biglogo from "../../assets/logos/biglogo.svg";
import Button from "../ui/Button";
import stars from "../../assets/pixelart/stars.svg";
import instagram from "../../assets/socialmedialogos/instagram.svg";
import linkedin from "../../assets/socialmedialogos/linkedin.svg";
import x from "../../assets/socialmedialogos/x.svg";
import caseyblink from "../../assets/pixelart/caseyblink.gif";
import caseystare from "../../assets/pixelart/caseystare.gif";
import airplane from "../../assets/pixelart/airplane.png";
import {
  getResultMessage,
  validateEmail,
  ButtonStates,
  signUpForMailingList,
} from "../../utils/mailingListUtil";
import ResultText from "../ui/ResultText";

export default function Hero() {
  gsap.registerPlugin(useGSAP, DrawSVGPlugin, ScrollTrigger, MotionPathPlugin);

  const maskPathRef = useRef<SVGPathElement | null>(null);
  const planeWrapperRef = useRef<SVGGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [buttonState, setButtonState] = useState(ButtonStates.DEFAULT);
  const [email, setEmail] = useState("");

  useGSAP(() => {
    if (!pathRef.current || !planeWrapperRef.current || !maskPathRef.current)
      return;

    gsap.set(planeWrapperRef.current, {
      opacity: 0,
      transformOrigin: "50% 50%",
    });

    gsap.to(planeWrapperRef.current, {
      opacity: 0.5,
      scrollTrigger: {
        trigger: pathRef.current,
        start: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: maskPathRef.current,
        start: "top 30%",
        scrub: 3,
      },
      defaults: { ease: "none" },
    });

    tl.fromTo(
      maskPathRef.current,
      { drawSVG: "0% 0%" },
      { drawSVG: "0% 100%" }
    );

    tl.to(
      planeWrapperRef.current,
      {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
      },
      0
    );
  });

 const handleSubmit = useCallback(
  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "") {
      setHasError(true);
      setButtonState(ButtonStates.EMPTY);
      return;
    }

    if (validateEmail(email)) {
      setButtonState(ButtonStates.SUBMITTING);

      const state = await signUpForMailingList(email);
      setButtonState(state);

      if (state !== ButtonStates.SUBMITTED) {
        setHasError(true);
      }
    } else {
      setButtonState(ButtonStates.INVALID);
      setHasError(true);
    }
  },
  [email]
);

  const resultMessage = useMemo(
    () => getResultMessage(buttonState),
    [buttonState]
  );

  return (
    <section
      id="hero"
      className="grid grid-cols-1 mt-[6rem] md:mt-[8rem] md:grid-cols-2 gap-14 3xl:max-w-[93%] justify-center items-center mx-auto"
    >
      <div className="relative inline-block">
        <h2 className=" text-xl lg:text-2xl tracking-[10%] ">Coming Soon</h2>
        <img
          className=" my-4 lg:my-7 h-18 md:h-29 3xl:h-34"
          src={biglogo}
          alt="casehackslogo"
        />
        <div>
          <span>
            <h2 className="text-xl lg:text-2xl font-semibold">
              Where Innovation Takes Flight.
            </h2>
            <svg
              className="absolute overflow-visible translate-x-[26%] lg:translate-x-[48%] -z-1000 -translate-y-[3%] hidden md:block "
              width="431"
              height="415"
              viewBox="0 0 431 415"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <mask id="draw-mask" maskUnits="userSpaceOnUse">
                  <rect width="100%" height="100%" fill="black" />

                  <path
                    ref={maskPathRef}
                    d="M188.015 1C189.418 1 198.556 1 221.301 2.61481C235.694 3.63669 255.617 7.45924 270.647 10.4148C285.678 13.3704 295.145 15.9541 306.51 20.5147C331.373 30.4924 346.32 40.4503 350.91 45.006C355.837 49.8961 361.897 54.7977 368.953 61.6239C373.1 65.6362 378.814 70.3879 386.964 80.9576C395.114 91.5273 405.633 107.675 411.578 117.609C419.26 130.444 421.062 137.006 424.239 149.646C426.656 159.261 428.118 175.85 429.201 187.887C430.921 206.991 429.584 218.549 427.82 227.171C425.965 236.24 420.754 247.234 413.342 260.089C405.555 273.595 395.602 280.558 388.547 285.104C384.196 287.907 378.686 292.233 369.484 297.626C360.282 303.018 347.659 309.478 335.72 314.743C313.286 324.638 297.154 328.523 288.143 329.501C273.148 331.13 264.564 326.918 254.114 322.675C248.597 320.436 243.302 313.569 238.345 305.426C234.886 299.745 235.832 292.361 236.182 285.353C236.393 281.144 239.36 278.953 242.361 277C249.351 272.454 260.569 271.446 276.433 270.629C301.376 269.344 319.394 271.76 324.871 272.9C334.406 274.885 345.555 281.84 363.629 293.736C380.122 304.591 381.045 319.03 383.17 328.322C385.021 336.416 382.48 342.547 379.834 345.307C375.849 349.463 363.799 356.219 341.729 363.706C329.971 367.695 316.503 370.547 277.905 375.925C239.306 381.303 175.838 388.731 141.214 393.042C106.589 397.353 102.732 398.322 92.68 399.79C66.5643 403.604 47.7751 405.192 43.5354 405.676C35.347 406.612 27.9685 409.42 20.8598 410.247C13.411 411.387 8.81002 412.366 5.62757 413.016C4.19839 413.344 3.14643 413.667 1 414"
                    fill="none"
                    stroke="white"
                    strokeWidth="5" 
                    strokeLinecap="round"
                  />
                </mask>
              </defs>
              <path
                ref={pathRef}
                d="M188.015 1C189.418 1 198.556 1 221.301 2.61481C235.694 3.63669 255.617 7.45924 270.647 10.4148C285.678 13.3704 295.145 15.9541 306.51 20.5147C331.373 30.4924 346.32 40.4503 350.91 45.006C355.837 49.8961 361.897 54.7977 368.953 61.6239C373.1 65.6362 378.814 70.3879 386.964 80.9576C395.114 91.5273 405.633 107.675 411.578 117.609C419.26 130.444 421.062 137.006 424.239 149.646C426.656 159.261 428.118 175.85 429.201 187.887C430.921 206.991 429.584 218.549 427.82 227.171C425.965 236.24 420.754 247.234 413.342 260.089C405.555 273.595 395.602 280.558 388.547 285.104C384.196 287.907 378.686 292.233 369.484 297.626C360.282 303.018 347.659 309.478 335.72 314.743C313.286 324.638 297.154 328.523 288.143 329.501C273.148 331.13 264.564 326.918 254.114 322.675C248.597 320.436 243.302 313.569 238.345 305.426C234.886 299.745 235.832 292.361 236.182 285.353C236.393 281.144 239.36 278.953 242.361 277C249.351 272.454 260.569 271.446 276.433 270.629C301.376 269.344 319.394 271.76 324.871 272.9C334.406 274.885 345.555 281.84 363.629 293.736C380.122 304.591 381.045 319.03 383.17 328.322C385.021 336.416 382.48 342.547 379.834 345.307C375.849 349.463 363.799 356.219 341.729 363.706C329.971 367.695 316.503 370.547 277.905 375.925C239.306 381.303 175.838 388.731 141.214 393.042C106.589 397.353 102.732 398.322 92.68 399.79C66.5643 403.604 47.7751 405.192 43.5354 405.676C35.347 406.612 27.9685 409.42 20.8598 410.247C13.411 411.387 8.81002 412.366 5.62757 413.016C4.19839 413.344 3.14643 413.667 1 414"
                stroke="#52443C"
                strokeOpacity="0.3"
                strokeWidth="5"
                strokeLinecap="square"
                strokeDasharray="14 14"
                mask="url(#draw-mask)"
              />

              <g ref={planeWrapperRef}>
                <image
                  href={airplane}
                  className="[image-rendering:pixelated]"
                  width="90"
                  height="90"
                />
              </g>
            </svg>
          </span>
        </div>
        <h3 className="lg:text-lg mt-4 md:mt-7">
          Official Date coming soon...
        </h3>

        <form
          onSubmit={handleSubmit}
          onBlur={() => {
            setButtonState(ButtonStates.DEFAULT);
          }}
          className=" mt-10 md:mt-11 lg:mt-12 relative border-1 border-font/50 rounded-2xl flex items-center px-3 lg:w-[30rem] md:w-[26rem] w-[24rem]"
        >
          <img className="mr-3 h-4 md:h-6 " src={stars} alt="stars" />
          <input
            className=" py-3 md:py-3 md:pr-3 lg:py-4 lg:pr-4 text-sm md:text-sm lg:text-rg grow focus:outline-none z-4"
            type="text"
            aria-label="Email Input"
            aria-required="true"
            name="email"
            placeholder="Stay in tune with upcoming events"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
              setHasError(false);
            }}
          />
          <Button
            className="py-1 lg:px-4 lg:py-1.5 px-2 md:px-2 text-sm lg:text-rg"
            text="Notify Me"
            disabled={buttonState === ButtonStates.SUBMITTING || hasError}
            onClick={(e: any) => {
              if (
                buttonState !== ButtonStates.SUBMITTING &&
                buttonState !== ButtonStates.SUBMITTED
              )
                handleSubmit(e);
            }}
            aria-label="Submit Email"
          />
        </form>
        {(hasError || buttonState === ButtonStates.SUBMITTED) && (
          <ResultText resultMessage={resultMessage} hasError={hasError} />
        )}
        <p className="my-6 md:text-rg lg:text-lg">
          Interested in sponsoring? Learn more{" "}
          <HashLink
            smooth
            to="#sponsors"
            className="text-primary hover:underline"
          >
            here.
          </HashLink>
        </p>
        <div className="flex space-x-5 items-center">
          <div>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/casehacks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-5 hover:-translate-y-0.5 transition ease-in-out duration-300"
                src={instagram}
                alt="Instagram"
              />
            </a>
          </div>
          <div>
            <a
              aria-label="Linkedin"
              href="https://www.linkedin.com/company/thegoldenhack/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-5 hover:-translate-y-0.5 transition ease-in-out duration-300"
                src={linkedin}
                alt="Linkedin"
              />
            </a>
          </div>
          <div>
            <a
              aria-label="X"
              href="https://x.com/The_GoldenHack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-5 hover:-translate-y-0.5 transition ease-in-out duration-300"
                src={x}
                alt="x"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center md:justify-end">
        <div className="group">
          <img
            className="[image-rendering:pixelated] group-hover:hidden"
            src={caseyblink}
            alt="caseyblinkcouchgif"
          />
          <img
            className="[image-rendering:pixelated] hidden group-hover:block"
            src={caseystare}
            alt="caseystarecouchgif"
          />
        </div>
      </div>
    </section>
  );
}
