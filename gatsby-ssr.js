import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  // preload local fonts
  setHeadComponents([
    // <link
    //   rel="preload"
    //   href="/fonts/DKCutAlong/DKCutAlong-Regular.woff2"
    //   as="font"
    //   type="font/woff2"
    //   crossOrigin="anonymous"
    //   key="interFont"
    // />
  ])
}
