import React from "react";
import { graphql } from "gatsby";

import GraphQLErrorList from "../components/graphql-error-list";
import BlogPostPreviewList from "../components/news/blog-post-preview-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query BlogCategoryTemplateQuery($catID: String!) {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      NavMenu {
        ...NavMenu
      }
      ctaRoute {
        slug {
          current
        }
      }
    }
    categories: allSanityCategory(filter: { slug: { current: { ne: null } } }) {
      edges {
        node {
          title
          slug {
            current
          }
        }
      }
    }
    category: sanityCategory(id: { eq: $catID }) {
      id
      _rawNewsBodyContent(resolveReferences: { maxDepth: 10 })
      _rawBackground(resolveReferences: { maxDepth: 10 })
      title
      newsSubHeading
      newsHeading
      slug {
        current
      }
    }
  }
`;

const BlogCategoryTamplate = props => {
  const { data, errors, pageContext } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const category = (data || {}).category;
  const categories = (data || {}).categories;
  const menuItems = site.NavMenu && (site.NavMenu._rawItems || []);

  //build breadcrumbs
  const breadcrumbs = [
    {
      page: { title: category.title },
      slug: { current: category.slug.current }
    },
    {
      page: { title: "News" },
      slug: { current: `${category.slug.current}/news` }
    }
  ];

  if (!site) {
    console.warn(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout navMenuItems={menuItems}>
      <SEO
        title={`${category.title} News & Case Studies`}
        description={category.newsSubHeading}
        breadcrumb={breadcrumbs}
      />

      <main>
        <BlogPostPreviewList
          category={category}
          categories={categories.edges}
          pageContext={pageContext}
          breadcrumbs={breadcrumbs}
          route={site.ctaRoute}
        />
      </main>
    </Layout>
  );
};

export default BlogCategoryTamplate;
