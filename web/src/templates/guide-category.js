import React from "react";
import { graphql } from "gatsby";

import GraphQLErrorList from "../components/graphql-error-list";
import GuidePostPreviewList from "../components/guides/guide-post-preview-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query GuideCategoryTemplateQuery($catID: String!) {
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
      _rawBodyContent(resolveReferences: { maxDepth: 10 })
      _rawBackground(resolveReferences: { maxDepth: 10 })
      title
      subHeading
      heading
      slug {
        current
      }
    }
  }
`;

const GuideCategoryTamplate = props => {
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
      page: { title: "Guides" },
      slug: { current: `${category.slug.current}/guides` }
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
        title={`${category.title} Resource Centre`}
        description={category.subHeading}
        breadcrumb={breadcrumbs}
      />

      <main>
        <GuidePostPreviewList
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

export default GuideCategoryTamplate;
