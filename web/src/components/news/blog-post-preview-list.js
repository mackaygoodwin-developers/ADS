import React from "react";
import { Link, navigate, useStaticQuery, graphql } from "gatsby";
import { Row, Col, Container, Form } from "react-bootstrap";

import BlogPostPreview from "./blog-post-preview";
import PortableText from "../portableText";
import SimpleHero from "../sections/simpleHero";
import "./blog.scss";
import "../../styles/shared/postCats.scss";

function BlogPostPreviewGrid(props) {
  const { category, categories, pageContext, breadcrumbs, route } = props;

  const selectOpp = event => {
    navigate(event.target.value);
  };

  const posts = useStaticQuery(
    graphql`
      query allPosts {
        allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
          edges {
            node {
              id
              publishedAt
              _rawMainImage(resolveReferences: { maxDepth: 10 })
              title
              _rawExcerpt
              slug {
                current
              }
              category {
                slug {
                  current
                }
                id
              }
            }
          }
        }
      }
    `
  );

  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  let filteredPosts = paginate(
    posts.allSanityPost.edges.filter(post => {
      if (post.node.category) {
        return post.node.category.id === category.id;
      }
    }),
    pageContext.limit,
    pageContext.humanPageNumber
  );

  return (
    <>
      <SimpleHero
        heading={category.newsHeading}
        subHeading={category.newsSubHeading}
        illustration={category._rawBackground}
        breadcrumbs={breadcrumbs}
        route={route}
      />

      <Container className="research_grid_part" as="section">
        <div className="teb_main_saction">
          <ul>
            {categories.map((cat, index) => (
              <li
                key={index}
                className={`${cat.node.slug.current === category.slug.current ? "active" : ""}`}
              >
                <Link to={`/${cat.node.slug.current}/news`}>{cat.node.title}</Link>
              </li>
            ))}
          </ul>

          <Form.Group as={Col} controlId="FilterSelect">
            <Form.Control as="select" value={`/${category.slug.current}/news`} onChange={selectOpp}>
              {categories.map((cat, index) => (
                <option key={index} value={`/${cat.node.slug.current}/news`}>
                  {cat.node.title}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </div>
        <div className="teb_contact">
          <PortableText blocks={category._rawNewsBodyContent} />

          <Row>
            {filteredPosts &&
              filteredPosts.map((node, index) => (
                <Col sm={12} md={6} lg={4} key={index}>
                  <BlogPostPreview {...node} />
                </Col>
              ))}
          </Row>
          <div className="load_more_research">
            {props.pageContext.previousPagePath && (
              <Link to={`/${props.pageContext.previousPagePath}`}>Previous</Link>
            )}
            {props.pageContext.nextPagePath && (
              <Link to={`/${props.pageContext.nextPagePath}`}>Next</Link>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default BlogPostPreviewGrid;
