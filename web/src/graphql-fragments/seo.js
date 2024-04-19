import { graphql } from "gatsby";

export const SEO = graphql`
  fragment SEO on SanitySeo {
    canonical
    description
    disallowRobots
    image {
      ...SanityImage
    }
    includeInSitemap
    title
    author
  }
`;
