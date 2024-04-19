/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// TODO: might be more performant https://stackoverflow.com/questions/57739076/how-to-integrate-react-bootstrap-with-gatsby
import "./src/styles/style.scss";

// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
};

// Displaying a message when a service worker updates https://www.gatsbyjs.com/docs/add-offline-support-with-a-service-worker/
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
