const { paginate } = require(`gatsby-awesome-pagination`);
const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: "SanityPost",
      interfaces: ["Node"],
      fields: {
        isPublished: {
          type: "Boolean!",
          resolve: source => new Date(source.publishedAt) <= new Date()
        }
      }
    })
  ]);
  actions.createTypes([
    schema.buildObjectType({
      name: "SanityGuide",
      interfaces: ["Node"],
      fields: {
        isPublished: {
          type: "Boolean!",
          resolve: source => new Date(source.publishedAt) <= new Date()
        }
      }
    })
  ]);
};

//landing pages
async function createLandingPages(pathPrefix = "/", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityRoute(filter: { slug: { current: { ne: null } }, page: { id: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const routeEdges = (result.data.allSanityRoute || {}).edges || [];
  routeEdges.forEach(edge => {
    const { id, slug = {} } = edge.node;

    if (slug.current !== "") {
      //hack to remove double up on home page
      const path = [pathPrefix, slug.current, "/"].join("");
      reporter.info(`Creating landing page: ${path}`);
      createPage({
        path,
        component: require.resolve("./src/templates/page.js"),
        context: { id }
      });
    }
  });
}

//team pages
async function createTeamPages(pathPrefix = "meet-the-team", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityAuthor {
        edges {
          node {
            id
            page
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const authorEdges = (result.data.allSanityAuthor || {}).edges || [];
  authorEdges.forEach(edge => {
    const { id, slug, page = {} } = edge.node;
    if (page) {
      // if author is set to have a page
      const path = `${pathPrefix}/${slug.current}`;
      reporter.info(`Creating author page: ${path}`);
      createPage({
        path,
        component: require.resolve("./src/templates/author.js"),
        context: { id }
      });
    }
  });
}

//Post Cats
async function createBlogCategoryPages(pathPrefix = "news", graphql, actions, reporter) {
  const { createPage } = actions;
  return graphql(`
    query BlogCategoryTemplateQuery {
      allSanityCategory(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
      allSanityPost(
        filter: { category: { id: { ne: "" } } }
        sort: { fields: [publishedAt], order: DESC }
      ) {
        edges {
          node {
            category {
              id
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors;

    result.data.allSanityCategory.edges.forEach(cat => {
      let { id, slug = {} } = cat.node;
      let catID = id;
      let allposts = (result.data.allSanityPost || {}).edges || [];

      let filteredPosts = allposts.filter(posts => {
        if (posts.node.category) {
          return posts.node.category.id === catID;
        }
      });

      let path = `${slug.current}/${pathPrefix}`;
      reporter.info(`Creating blog post cateory page: ${path}`);

      paginate({
        createPage, // The Gatsby `createPage` function
        items: filteredPosts, // An array of objects
        itemsPerPage: 6, // How many items you want per page
        pathPrefix: path, // Creates pages like `/blog`, `/blog/2`, etc
        component: require.resolve("./src/templates/blog-category.js"), // Just like `createPage()`
        context: { catID }
      });
    });
  });
}

//Post pages
async function createBlogPostPages(pathPrefix = "news", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: {
          slug: { current: { ne: null } }
          isPublished: { eq: true }
          category: { slug: { current: { ne: null } } }
        }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
            category {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];
  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach(edge => {
      const { id, slug, category = {} } = edge.node;
      const path = `${category.slug.current}/${pathPrefix}/${slug.current}`;
      reporter.info(`Creating blog post page: ${path}`);
      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id }
      });
    });
}

//Guide cats
async function createGuideCategoryPages(pathPrefix = "guides", graphql, actions, reporter) {
  const { createPage } = actions;
  return graphql(`
    query GuideCategoryTemplateQuery {
      allSanityCategory(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
      allSanityGuide(
        filter: { category: { id: { ne: "" } } }
        sort: { fields: [publishedAt], order: DESC }
      ) {
        edges {
          node {
            category {
              id
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors;

    result.data.allSanityCategory.edges.forEach(cat => {
      let { id, slug = {} } = cat.node;
      let catID = id;
      let allposts = (result.data.allSanityGuide || {}).edges || [];

      let filteredPosts = allposts.filter(posts => {
        if (posts.node.category) {
          return posts.node.category.id === catID;
        }
      });

      let path = `${slug.current}/${pathPrefix}`;
      reporter.info(`Creating guide post cateory page: ${path}`);

      paginate({
        createPage, // The Gatsby `createPage` function
        items: filteredPosts, // An array of objects
        itemsPerPage: 6, // How many items you want per page
        pathPrefix: path, // Creates pages like `/blog`, `/blog/2`, etc
        component: require.resolve("./src/templates/guide-category.js"), // Just like `createPage()`
        context: { catID }
      });
    });
  });
}

//Guide Posts
async function createGuidePostPages(pathPrefix = "guides", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityGuide(
        filter: {
          slug: { current: { ne: null } }
          isPublished: { eq: true }
          category: { slug: { current: { ne: null } } }
        }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
            category {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityGuide || {}).edges || [];
  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach(edge => {
      const { id, slug, category = {} } = edge.node;
      const path = `${category.slug.current}/${pathPrefix}/${slug.current}`;
      reporter.info(`Creating blog post page: ${path}`);
      createPage({
        path,
        component: require.resolve("./src/templates/guide-post.js"),
        context: { id }
      });
    });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions
  const redirection = [
    { from: '/business-advisory/business-health-check/', to: '/' }
  ];
  redirection.forEach(post => {
    createRedirect({ fromPath: post.from, toPath: post.to, isPermanent: true })
  });
  await createLandingPages("/", graphql, actions, reporter);
  await createTeamPages("meet-the-team", graphql, actions, reporter);
  await createBlogPostPages("news", graphql, actions, reporter);
  await createBlogCategoryPages("news", graphql, actions, reporter);
  await createGuidePostPages("guides", graphql, actions, reporter);
  await createGuideCategoryPages("guides", graphql, actions, reporter);
};
