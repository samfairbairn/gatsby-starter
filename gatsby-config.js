/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-svgr",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-XXXXXXXXXX"],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@/components": "src/components",
          "@/layouts": "src/layouts",
          "@/pages": "src/pages",
          "@/templates": "src/templates",
          "@/images": "src/images",
          "@/hooks": "src/hooks",
          "@/contexts": "src/contexts",
          "@/utils": "src/utils",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
  siteMetadata: {
    title: "My Site",
    description: "A funky new site",
    siteUrl: "https://www.yourdomain.tld",
  },
}
