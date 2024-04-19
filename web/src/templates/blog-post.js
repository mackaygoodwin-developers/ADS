import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import BlogPost from "../components/news/blog-post";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      NavMenu {
        ...NavMenu
      }
      googleRating
    }
    post: sanityPost(id: { eq: $id }) {
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

const BlogPostTemplate = props => {
  const { data, errors } = props;
  const post = data && data.post;

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

      {post && <BlogPost site={site} {...post} />}
    </Layout>
  );
};

export default BlogPostTemplate;
