import React from "react";
import { graphql } from "gatsby";

import SimpleHero from "../components/sections/simpleHero/index";
import FormHero from "../components/sections/formHero/index";
import WhyTrust from "../components/sections/whyTrust/index";
import FeatureIcons from "../components/sections/featureIcons/index";
import Video from "../components/sections/video/index";
import Services from "../components/sections/services/index";
import Faqs from "../components/sections/faqs/index";
import ReviewCarousel from "../components/sections/reviewCarousel/index";
import TileImageContent from "../components/sections/tileImageContent/index";
import TextOnly from "../components/sections/textOnly/index";
import FindOffice from "../components/sections/findOffice/index";
import MapLocation from "../components/sections/mapLocation/index";
import FormContent from "../components/sections/formContent/index";
import Team from "../components/sections/team/index";
import TeamGrid from "../components/sections/teamGrid/index";
import GuidesCarousel from "../components/sections/guidesCarousel/index";
import Process from "../components/sections/process/index";
import NewsCarousel from "../components/sections/newsCarousel/index";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      page {
        ...PageInfo
      }
      seo {
        ...SEO
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      googleRating
      phoneNumber
      ctaRoute {
        slug {
          current
        }
      }
    }
  }
`;

const Page = props => {
  const { data, errors } = props;
  React.useEffect(() => {
    if(window.location.href.includes("director-penalty-notice")){
      document.body.classList = 'dpn_main';
    }
    if(window.location.href.includes("personal-insolvency")){
      document.body.classList = 'ads_main';
    }
    if(window.location.href.includes("liquidator")){
      document.body.classList = 'liquidator_body';
    }
     return () => {
       document.body.classList = '';
     }
   }, [])

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const page = data.page || data.route.page;
console.log('test--');
  const content = (page._rawContent || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null;console.log(c._type)
      switch (c._type) {
        case "simpleHero":
          el = (
            <SimpleHero key={c._key} {...c} {...site} breadcrumbs={page._rawBreadcrumb || null} />
          );
          break;
        case "formHero":
          el = <FormHero key={c._key} {...c} {...site} breadcrumbs={page._rawBreadcrumb || null} />;
          break;
        case "whyTrust":
          el = <WhyTrust key={c._key} {...c} {...site} />;
          break;
        case "featureIcons":
          el = <FeatureIcons key={c._key} {...c} {...site} />;
          break;
        case "video":
          el = <Video key={c._key} {...c} {...site} />;
          break;
        case "services":
          el = <Services key={c._key} {...c} {...site} />;
          break;
        case "faqs":
          el = <Faqs key={c._key} {...c} {...site} />;
          break;
        case "reviewCarousel":
          el = <ReviewCarousel key={c._key} {...c} {...site} />;
          break;
        case "tileImageContent":
          el = <TileImageContent key={c._key} {...c} {...site} />;
          break;
        case "findOffice":
          el = <FindOffice key={c._key} {...c} {...site} />;
          break;
        case "mapLocation":
          el = <MapLocation key={c._key} {...c} {...site} />;
          break;
        case "formContent":
          el = <FormContent key={c._key} {...c} {...site} />;
          break;
        case "team":
          el = <Team key={c._key} {...c} {...site} />;
          break;
        case "teamGrid":
          el = <TeamGrid key={c._key} {...c} {...site} />;
          break;
        case "textOnly":
          el = <TextOnly key={c._key} {...c} {...site} />;
          break;
        case "guideCarousel":
          el = <GuidesCarousel key={c._key} {...c} {...site} />;
          break;
        case "newsCarousel":
          el = <NewsCarousel key={c._key} {...c} {...site} />;
          break;
        case "process":
          el = <Process key={c._key} {...c} {...site} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  const menuItems = page.navMenu && (page.navMenu._rawItems || []);
  const seoData = (data.route && data.route.seo) || (data.site && data.site.seo) || null;

  return (
    <Layout navMenuItems={menuItems}>
      <SEO {...seoData} breadcrumb={page._rawBreadcrumb || null} />
      <main>{content}</main>
    </Layout>
  );
};

export default Page;
