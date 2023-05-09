import { Footer, Navbar } from "@/components";
import { MenuProvider } from "@/contexts/MenuContext";
import React, { forwardRef } from "react";

const MainLayout = forwardRef(({ children }, ref) => {
  return (
    <MenuProvider>
      <Navbar />
      <div ref={ref} data-scroll-container id="scroll-container">
        <main className="flex flex-col min-h-screen w-screen items-center justify-center py-52">
          {children}
        </main>
        <Footer />
      </div>
    </MenuProvider>
  );
});

export default MainLayout;
