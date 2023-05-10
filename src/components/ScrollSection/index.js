import { cn } from "@/utils"
import React, { useEffect, useState } from "react"
import { useLocomotiveScroll } from "react-locomotive-scroll"

const ScrollSection = ({ className }) => {
  const { scroll } = useLocomotiveScroll()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (args) => {
        if (typeof args.currentElements["scroll-section"] === "object") {
          let progress = args.currentElements["scroll-section"].progress
          setProgress(Math.round(progress * 100) / 100)
        }
      })
    }
  }, [scroll])

  return (
    <div
      data-scroll
      data-scroll-id="scroll-section"
      className={cn("flex items-center justify-center w-screen h-screen bg-slate-400", className)}
    >
      <p className="font-poppins text-white">{progress}</p>
    </div>
  )
}

export default ScrollSection
