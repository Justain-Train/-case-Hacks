import React from "react"

type PartnersCardProps = {
  logo?: React.ReactNode
  bird_position?: "top-left" | "bottom-right"
  pixel_bird?: React.ReactNode
  className?: string
}

export default function PartnersCard({
  logo,
  bird_position,
  pixel_bird,
  className = "",
}: PartnersCardProps) {
  return (
    <div
      className={`relative px-12 py-12 rounded-[10px] border-b-4 bg-white flex items-center justify-center min-h-[250px] ${className}`}
    >
      {bird_position === "top-left" && pixel_bird && (
        <div className="absolute scale-y-[-1] scale-x-[-1] -z-10 -top-13 left-7">
          {pixel_bird}
        </div>
      )}
      {bird_position === "bottom-right" && pixel_bird && (
        <div className="absolute -bottom-13 scale-y-[-1] scale-x-[-1] -z-10 right-7">
          {pixel_bird}
        </div>
      )}
      {logo ? <div className="mx-auto">{logo}</div> : null}
    </div>
  )
}

