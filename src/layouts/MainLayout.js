import { Footer, Navbar } from "@/components"
import { MenuProvider } from "@/contexts/MenuContext"
import React, { useRef } from "react"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"

const MainLayout = ({ children, smooth }) => {
  const containerRef = useRef()

  return (
    <MenuProvider>
      <Navbar />
      <LocomotiveScrollProvider
        options={{ smooth, lerp: 0.1 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div ref={containerRef} data-scroll-container id="scroll-container">
          <main className="flex flex-col min-h-screen w-screen items-center justify-center py-52">
            {children}
          </main>
          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </MenuProvider>
  )
}

export default MainLayout
