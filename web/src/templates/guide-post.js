import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import GuidePost from "../components/guides/guide-post";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query GuidePostTemplateQuery($id: String!) {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      NavMenu {
        ...NavMenu
      }
      googleRating
    }
    guide: sanityGuide(id: { eq: $id }) {
      id
      publishedAt
      category {
        id
        title
        slug {
          current
        }
      }
      _rawMainImage(resolveReferences: { maxDepth: 10 })
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      author {
        name
      }
      seo {
        ...SEO
      }
    }
  }
`;

const GuidePostTemplate = props => {
  const { data, errors } = props;
  const guide = data && data.guide;

  const site = (data || {}).site;
  const menuItems = site.NavMenu && (site.NavMenu._rawItems || []);
  return (
    <Layout textWhite={true} navMenuItems={menuItems}>
      {errors && <SEO title="GraphQL Error" />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {guide && <GuidePost site={site} {...guide} />}
    </Layout>
  );
};

export default GuidePostTemplate;
