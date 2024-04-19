import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

import { imageUrlFor } from "../lib/image-url";
import { buildImageObj } from "../lib/helpers";

// https://ogp.me

function SEO({
  canonical,
  author,
  description,
  lang,
  meta,
  title,
  image,
  breadcrumb,
  disallowRobots,
  jsonLD
}) {
  const { pathname } = useLocation();
  //defult canonical without traling / slash
  const defultCanonicalURL = `${process.env.GATSBY_CANONICAL_SITE_URL}${pathname.replace(
    /\/$/,
    ""
  )}`;

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const defultSEO = data.site.seo;

        const metaImage =
          image && image.asset
            ? imageUrlFor(buildImageObj(image))
                .width(1200)
                .url()
            : imageUrlFor(buildImageObj(defultSEO.image))
                .width(1200)
                .url();

        if (Array.isArray(breadcrumb) && breadcrumb.length) {
          let crumbArr = [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: process.env.GATSBY_CANONICAL_SITE_URL
            }
          ];
          breadcrumb.map((node, index) => {
            return crumbArr.push({
              "@type": "ListItem",
              position: index + 2,
              name: node.page.title,
              item: `${process.env.GATSBY_CANONICAL_SITE_URL}/${node.slug.current}`
            });
          });

          breadcrumb = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: crumbArr
          };
        } else {
          breadcrumb = null;
        }

        const org = {
          "@context": "http://schema.org",
          "@type": "Organization",
          name: "Australian Debt Solvers",
          url: "https://australiandebtsolvers.com.au",
          logo: "https://australiandebtsolvers.com.au/images/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: data.site.phoneNumber
          },
          sameAs: [
            "https://www.facebook.com/AustralianDebtSolvers/",
            "https://twitter.com/SolversDebt",
            "https://www.instagram.com/australiandebtsolvers/?hl=en",
            "https://www.linkedin.com/company/australian-debt-solvers/",
            "https://www.youtube.com/channel/UCWh5baCyJ7Oc-CZ6BbM9JYw"
          ]
        };
        let orgSchema = null;
        if (pathname === "/") {
          orgSchema = <script type="application/ld+json">{JSON.stringify(org)}</script>;
        }

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title || defultSEO.title}
            meta={[
              {
                name: "google-site-verification",
                content: "0XPIpYvK0B3IGdw5HvDCJyWnI1sCCCIsJjxPhFAEXN0"
              },
              {
                name: "ahrefs-site-verification",
                content: "b4eace3e8050d259905959a6b442938f3174dd59c3d0d9466bb313c2a2d50a04"
              },
              {
                name: "description",
                content: description || defultSEO.description
              },
              {
                name: "author",
                content: author || defultSEO.author
              },
              {
                name: "publisher",
                content: author || defultSEO.author
              },
              {
                property: "og:title",
                content: title || defultSEO.title
              },
              {
                property: "og:description",
                content: description || defultSEO.description
              },
              {
                property: "og:url",
                content: defultCanonicalURL
              },
              {
                property: "og:type",
                content: "website"
              },
              {
                property: "og:image",
                content: metaImage
              },
              {
                name: "twitter:card",
                content: "summary"
              },
              {
                name: "twitter:creator",
                content: author || defultSEO.author
              },
              {
                name: "twitter:title",
                content: title || defultSEO.title
              },
              {
                name: "twitter:description",
                content: description || defultSEO.description
              }
            ].concat(meta)}
            link={[{ rel: "canonical", href: canonical || defultCanonicalURL }]}
          >
            {disallowRobots && <meta name="robots" content="NOINDEX, FOLLOW" />}
            {breadcrumb && <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>}

            {orgSchema}

            {jsonLD && <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>}
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      seo {
        ...SEO
      }
      phoneNumber
      googleRating
    }
  }
`;
