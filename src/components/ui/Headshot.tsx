import vineFrame from "../../assets/pixelart/profileframe.png";


type HeadshotProps = {
  headshotSrc?: string
  headshotAlt?: string
  className?: string
}

export default function Headshot({
  headshotSrc,
  headshotAlt = "Headshot",
  className = "",
}: HeadshotProps) {
  const src = headshotSrc 

  return (
    <div className={`relative inline-flex items-center justify-center w-full max-w-[320px] ${className}`}>
      <img
        src={vineFrame}
        alt="Decorative vine frame"
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center right-1/9 -z-10">
        <img
          src={src}
          alt={headshotAlt}
          className="w-[70%] max-w-[200px] h-auto rounded-full object-cover"
        />
      </div>
    </div>
  )
}