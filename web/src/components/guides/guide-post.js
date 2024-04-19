import React, { useState } from "react";
import { format, distanceInWords, differenceInDays } from "date-fns";
import { Row, Col, Container } from "react-bootstrap";
import { useStaticQuery, graphql, Link } from "gatsby";
import Scrollspy from "react-scrollspy";
import { useLocation } from "@reach/router";
import slugify from "react-slugify";

import SEO from "../../components/seo";
import SimpleHero from "../sections/simpleHero";
import PortableText from "../portableText";
import GuidePostPreview from "./guide-post-preview";
import ReviewCarousel from "../sections/reviewCarousel";

import tab_trust from "../../images/google_review_logo.png";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";

import "./guide.scss";
import "../../styles/shared/posts.scss";

function BlogPost(props) {
  const { _rawBody, author, title, _rawMainImage, publishedAt, category, site, slug, seo } = props;

  const { pathname } = useLocation();

  let headings = [];
  let headingsVal = [];
  _rawBody.map((x) => {
    if (x.style === "h2") {
      headings.push(slugify(x.children[0].text));
      headingsVal.push(x.children[0].text);
    }
    return null;
  });

  const data = useStaticQuery(graphql`
    query guidePageQuery {
      categoryGuides: allSanityGuide(
        filter: {
          slug: { current: { ne: null } }
          isPublished: { eq: true }
          category: { slug: { current: { ne: null } } }
        }
      ) {
        edges {
          node {
            title
            publishedAt
            _rawExcerpt
            slug {
              current
            }
            category {
              id
              slug {
                current
              }
            }
            _rawMainImage(resolveReferences: { maxDepth: 10 })
          }
        }
      }
      reviews: allSanityReviews(filter: {}, limit: 5) {
        nodes {
          title
          rating
          review
          _key
          name
        }
      }
      site: sanitySiteSettings {
        googleRating
      }
    }
  `);
  const allposts = (data.categoryGuides || {}).edges || [];

  // filter posts to current category
  const categoryId = category.id;
  const filteredPosts = allposts.filter((posts) => {
    if (posts.node.category) {
      return posts.node.category.id === categoryId;
    } else return null;
  });

  //get 3 random posts from same category
  const shuffled = filteredPosts.sort(() => 0.5 - Math.random());
  const randp = shuffled.slice(0, 3);
  const [allpostsRand, setAllpostsRand] = useState(randp);

  //build breadcrumbs
  const breadcrumbs = [
    {
      page: { title: category.title },
      slug: { current: category.slug.current },
    },
    {
      page: { title: "Guides" },
      slug: { current: `${category.slug.current}/guides` },
    },
    {
      page: { title },
      slug: { current: `${category.slug.current}/guides/${slug.current}` },
    },
  ];

  let json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    image: [_rawMainImage.image.asset.url],
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      name: author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Australian Debt Solvers",
      logo: {
        "@type": "ImageObject",
        url: "https://australiandebtsolvers.com.au/images/logo.png",
      },
    },
  };

  return (
    <article>
      <SimpleHero isBlank illustration={_rawMainImage} breadcrumbs={breadcrumbs} />
      <SEO jsonLD={json} {...seo} breadcrumb={breadcrumbs} author={author && author.name} />
      <Container className="singal_detil_saction">
        <Row>
          <Col
            sm={12}
            md={{ span: 12, order: 2 }}
            lg={{ span: 9, order: 1 }}
            className="all_detail_research"
          >
            <h1>{title}</h1>

            <Row className="date_and_social">
              <Col md={6}>
                <ul className="date_user">
                  {publishedAt && (
                    <li>
                      {differenceInDays(new Date(publishedAt), new Date()) > 3
                        ? distanceInWords(new Date(publishedAt), new Date())
                        : format(new Date(publishedAt), "MMMM Do, YYYY")}
                    </li>
                  )}
                  {author && <li>{author.name}</li>}
                </ul>
              </Col>
              <Col md={6}>
                <ul className="social_post_shear">
                  <li>Share</li>
                  <li>
                    <a
                      rel="nofollow"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.GATSBY_CANONICAL_SITE_URL}/${pathname}`}
                    >
                      <img src={facebook} alt="facebook" width="15" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      href={`https://twitter.com/intent/tweet?text=${process.env.GATSBY_CANONICAL_SITE_URL}/${pathname}`}
                    >
                      <img src={twitter} alt="twitter" width="15" />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            {/* TODO: update these to set settings */}
            {/* TODO: need to be shareURL's */}

            {_rawBody && <PortableText blocks={_rawBody} />}
          </Col>
          <Col
            sm={12}
            md={{ span: 12, order: 1 }}
            lg={{ span: 3, order: 2 }}
            className="order-first"
            as="aside"
          >
            <div className="right_artical sticky-top" id="sidebar">
              <h4>In this artical</h4>
              <div className="ato_saction">
                <Scrollspy
                  items={headings}
                  offset={0}
                  scrolledPastClassName="scrollPass"
                  currentClassName="is-current"
                >
                  {headings.map((head, index) => (
                    <li key={index}>
                      <Link to={`#${slugify(head)}`}>{headingsVal[index]}</Link>
                    </li>
                  ))}
                </Scrollspy>
              </div>
              <p>
                Rated {site.googleRating} out of 5
                <br />
                <img src={tab_trust} alt="google rating" />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <aside className="sectionOn letest_news">
        <Container>
          <Row className="letest_news_header">
            <Col>
              <h4>Latest news from Australian Debt Solvers</h4>
              <p>
                Visit our Blog section to read more about financial challenges, business updates and
                get inspired
              </p>
            </Col>
          </Row>
          <Row>
            {allpostsRand.map((node, index) => (
              <Col sm={12} md={6} lg={4} key={index}>
                <GuidePostPreview {...node} />
              </Col>
            ))}
          </Row>
          <Row className="text-center">
            <Col>
              <div className="see_more">
                <Link className="viewAll" to={`/${category.slug.current}/guides`}>
                  View All Guides
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </aside>
      <ReviewCarousel
        reviews={data.reviews.nodes}
        heading="We care about our customers"
        localContent="At Australian Debt solvers we take feedback seriously and pride ourselves on providing the best customer services possible"
        {...data.site}
      />
    </article>
  );
}

export default BlogPost;
