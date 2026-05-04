import React from "react"
import brown_bird from "../../assets/pixelart/dark_brown_bird.png"
type MainSponsorCardProps = {
  title: string
  subtitle?: string
  description: string
  logo?: React.ReactNode
  accentColor?: string
  className?: string
}

export default function MainSponsorCard({
  title,
  subtitle,
  description,
  logo,
  className = "",
}: MainSponsorCardProps) {
  return (
    <div
      className={`relative px-14 py-14 rounded-[10px] border-b-4 border-b-[#D34C2C] bg-white p-8 ${className}`}
    >
      <img
        src={brown_bird}
        alt="Decorative bird"
        className="absolute right-1/6 transform -translate-x-1/2 -top-10 -z-10 h-19 w-16 object-contain "
      />
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center">
        {logo ? <div className="mx-auto">{logo}</div> : null}
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-[#3f2f27]">
            {title}
          </h3>
          {subtitle ? (
            <p className="mt-3 text-lg font-medium text-[#5c4b42] md:text-2xl">
              {subtitle}
            </p>
          ) : null}
        </div>
        <p className="max-w-xl text-lg leading-7 text-[#5e4f44]">
          {description}
        </p>
      </div>
    </div>
  )
}
