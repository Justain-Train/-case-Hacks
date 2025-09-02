import footerscene from "../../assets/pixelart/footerscene.png";
import footerscenemobile from "../../assets/pixelart/footersceneMobile.png";

export default function Footer() {
  return (
    <section className="mt-section relative flex flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-4 mb-8">
        <div>
          <p className="text-xl font-semibold text-center">
            Made with ❤️ by the [case]Hacks Team
          </p>
        </div>
        <div>
          <p className="text-center">© 2025 Copyright [case]Hacks</p>
        </div>
      </div>
      <img
        className="3xl:w-[65%] w-[100%] [image-rendering:pixelated] hidden md:block"
        src={footerscene}
        alt="pixelartFooterScene"
      />

      <img
        className="w-[100%] [image-rendering:pixelated] md:hidden"
        src={footerscenemobile}
        alt="pixelartFooterSceneMobile"
      />
    </section>
  );
}
