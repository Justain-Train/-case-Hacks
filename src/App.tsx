import { lazy, Suspense, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";


const Navbar = lazy(() => import("./components/landingpage/Navbar"));
const Hero = lazy(() => import("./components/landingpage/Hero"));
const About = lazy(() => import("./components/landingpage/About"));
const Why = lazy(() => import("./components/landingpage/Why"));
const MainSponsor = lazy(() => import("./components/landingpage/MainSponsor"));
const Partners = lazy(() => import("./components/landingpage/Partners"));
const Sponsor = lazy(() => import("./components/landingpage/Sponsor"));
const FAQ = lazy(() => import("./components/landingpage/FAQ"));
const Footer = lazy(() => import("./components/landingpage/Footer"));
import Loader from "./components/ui/Loader";
import GrainBackground from "./components/ui/GrainBackground";
import MeetTheTeam from "./components/landingpage/MeetTheTeam";



export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = window.innerWidth < 768;

  
  useEffect(() => {
    if (isLoaded && !isMobile) {
      gsap.registerPlugin(ScrollSmoother);
      const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });

      return () => smoother.kill();
    }
  }, [isLoaded, isMobile]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <GrainBackground />
        <Navbar />

        <div
          id="smooth-wrapper"
          className="antialiased"
          onLoad={() => setIsLoaded(true)}
        >
          <div id="smooth-content">
            <div className="px-[3%] md:px-[5%] lg:px-[9%] 2xl:px-[13%] 3xl:px-[25%] md:pt-[2%] pt-6">
              <Hero />
              <About />
              <Why/>
              <MainSponsor />
              <Partners/>
              <Sponsor />
              <FAQ />
            </div>
            <MeetTheTeam />
            <Footer />
          </div>
        </div>
      </Suspense>
    </>
  );
}
