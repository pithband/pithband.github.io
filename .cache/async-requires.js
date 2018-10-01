// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/Andrea/Documents/portfolio/pith/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("/Users/Andrea/Documents/portfolio/pith/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/Andrea/Documents/portfolio/pith/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-releases-js": () => import("/Users/Andrea/Documents/portfolio/pith/src/pages/releases.js" /* webpackChunkName: "component---src-pages-releases-js" */)
}

exports.data = () => import("/Users/Andrea/Documents/portfolio/pith/.cache/data.json")

