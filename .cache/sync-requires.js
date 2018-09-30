// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Andrea/Documents/portfolio/pith/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Andrea/Documents/portfolio/pith/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/Andrea/Documents/portfolio/pith/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/Andrea/Documents/portfolio/pith/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Andrea/Documents/portfolio/pith/src/pages/index.js"))
}

