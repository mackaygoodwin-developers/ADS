import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";

import TeamPage from "../components/team/team-page";
import GraphQLErrorList from "../components/graphql-error-list";

import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query AuthorTemplateQuery($id: String!) {
    author: sanityAuthor(id: { eq: $id }) {
      slug {
        current
      }
      seo {
        ...SEO
      }
      _rawImage(resolveReferences: { maxDepth: 10 })
      _rawBody(resolveReferences: { maxDepth: 10 })
      name
      role
      office
      twitter
      linkedin
    }
    authorGuides: allSanityGuide(
      filter: { author: { id: { eq: $id } }, isPublished: { eq: true } }
      sort: { fields: publishedAt, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          category {
            slug {
              current
            }
          }
          slug {
            current
          }
          _rawMainImage(resolveReferences: { maxDepth: 10 })
          title
          _rawExcerpt
        }
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      googleRating
      NavMenu {
        ...NavMenu
      }
    }
  }
`;

const AuthorPostTemplate = props => {
  const { data, errors } = props;
  const author = data && data.author;
  const authorGuides = data && data.authorGuides;

  const site = (data || {}).site;
  const menuItems = site.NavMenu && (site.NavMenu._rawItems || []);
  return (
    <Layout navMenuItems={menuItems}>
      {errors && <SEO title="GraphQL Error" />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {author && <TeamPage site={site} authorGuides={authorGuides} {...author} />}
    </Layout>
  );
};

export default AuthorPostTemplate;
