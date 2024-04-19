// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const path = require("path");
const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    siteUrl: `https://australiandebtsolvers.com.au`,
  },
  plugins: [
    // "gatsby-plugin-preact",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://stats.g.doubleclick.net",
          "https://www.google.com.au",
          "https://www.google-analytics.com",
          "https://www.googletagmanager.com",
          "https://cdn.livechatinc.com",
          "https://script.chatsystem.io",
          "https://cdn.sanity.io",
          "https://vxml4.plavxml.com",
        ],
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Australian Debt Solvers`,
        short_name: `ADS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `fullscreen`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available, please see the additional resources below.
          purpose: `any maskable`,
        },
        crossOrigin: `anonymous`, // `use-credentials` or `anonymous`
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/contact-us*`],
        // workboxConfig: {
        //   globPatterns: ["**/*.{js,jpg,png,html,css}"]
        // }
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato\:300,400,600,700,800,900`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        ...clientConfig.sanity,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W9HK4N",
        includeInDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://australiandebtsolvers.com.au",
        sitemap: "https://australiandebtsolvers.com.au/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    "gatsby-plugin-advanced-sitemap",
    "gatsby-plugin-preact",
  ],
};
// TODO: postcss???? remove, look into
// TODO: update ICON on manifest
