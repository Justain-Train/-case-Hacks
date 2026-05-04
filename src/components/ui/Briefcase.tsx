
import type { ReactNode } from "react"
import briefcaseIcon from "../../assets/pixelart/Breifcase_Asset.png"

type BriefcaseProps = {
  title?: string
  description: string
  icon?: ReactNode
  rotation?: number
  className?: string
}

export default function Briefcase({
  title,
  description,
  icon,
  rotation = 0,
  className = "",
}: BriefcaseProps) {
  return (
    <div
      className={`relative w-full max-w-[280px] ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <img src={briefcaseIcon} alt="Briefcase" className="w-full h-auto" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 px-4 text-center">
        <div className="flex flex-col items-center transform -translate-y-1/5">
        {icon ? (
          <div className=" flex h-12 w-12 items-center justify-center text-[#E8C766]">
            {typeof icon === "string" ? (
              <img src={icon} alt="Icon" className="h-12 w-12 object-contain" />
            ) : (
              icon
            )}
          </div>
        ) : null}

        {title ? (
          <div className="text-[clamp(1.75rem,3vw,2.4rem)] font-bold leading-[0.95] text-[#E8C766]">
            {title}
          </div>
        ) : null}
        <div className="text-[clamp(0.9rem,1.6vw, 1.2rem)] font-bold leading-[1.1] text-[#E8C766]">
          {description}
        </div>
        </div>
      </div>
    </div>
  )
}
