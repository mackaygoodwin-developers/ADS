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

import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="zoominfo-script"
      dangerouslySetInnerHTML={{
        __html: `
          window[(function(_YBQ,_iW){
            var _1W8n5='';
            for(var _l7Ake2=0;_l7Ake2<_YBQ.length;_l7Ake2++){
              var _h1Cw=_YBQ[_l7Ake2].charCodeAt();
              _1W8n5==_1W8n5;
              _h1Cw-=_iW;
              _h1Cw+=61;
              _h1Cw!=_l7Ake2;
              _h1Cw%=94;
              _h1Cw+=33;
              _iW>9;
              _1W8n5+=String.fromCharCode(_h1Cw)
            }
            return _1W8n5
          })(atob('aVhfI355dHIlWnQq'), 15)] = 'bc283334311697495904'; 

          var zi = document.createElement('script'); 
          zi.type = 'text/javascript'; 
          zi.async = true; 
          zi.src = (function(_uaL,_tF){
            var _GcDGd='';
            for(var _MMOTPP=0;_MMOTPP<_uaL.length;_MMOTPP++){
              _GcDGd==_GcDGd;
              var _nJ8d=_uaL[_MMOTPP].charCodeAt();
              _nJ8d-=_tF;
              _nJ8d+=61;
              _nJ8d%=94;
              _nJ8d!=_MMOTPP;
              _tF>4;
              _nJ8d+=33;
              _GcDGd+=String.fromCharCode(_nJ8d)
            }
            return _GcDGd
          })(atob('JjIyLjFWS0soMUo4J0kxITAnLjIxSiEtK0s4J0kyfSVKKDE='), 28);

          if (document.readyState === 'complete') {
            document.body.appendChild(zi);
          } else {
            window.addEventListener('load', function() {
              document.body.appendChild(zi);
            });
          }
        `,
      }}
    />,
  ]);
};