import folder from "../../assets/pixelart/folder.png";

type SponsorFolderProps = {
  logoSrc: string;
  alt: string;
  src: string;
  className?: string;
};

export default function SponsorFolder({
  logoSrc,
  alt,
  src,
  className,
}: SponsorFolderProps) {
  return (
    <section
      className={`relative transition ease-in-out duration-400 hover:scale-105 ${
        className || ""
      }`}
    >
      <a href={src} target="_blank" rel="noopener noreferrer">
        <img
          src={folder}
          className="[image-rendering:pixelated] w-full h-full absolute inset-0 object-contain "
          alt="sponsor_folder_pixelart"
        />
        <img
          src={logoSrc}
          alt={alt}
          className="absolute inset-0 m-auto top-1/5 w-[75%] h-[35%]  object-contain "
        />
      </a>
    </section>
  );
}
