import { Icons } from "@/components";
import React from "react";

const Footer = () => {
  return (
    <div className="flex p-16 justify-between relative w-full h-64 bg-slate-900">
      <a
        href="https://link.com"
        target="_blank"
        rel="noreferrer"
        className="flex text-white font-poppins hover:underline"
      >
        link <Icons.arrowRight width={16} className="ml-2" />
      </a>
    </div>
  );
};

export default Footer;
