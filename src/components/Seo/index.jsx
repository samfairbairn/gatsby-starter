import { useSiteMetadata } from "@/hooks/use-site-metadata"
import OG from "@/images/OG.jpg"
import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <Helmet title={seo.title}>
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="url" content={seo.url} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={OG} />

      {children}
    </Helmet>
  )
}

export default Seo
