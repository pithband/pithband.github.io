// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Andrea/Documents/portfolio/pith/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Andrea/Documents/portfolio/pith/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Andrea/Documents/portfolio/pith/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/Andrea/Documents/portfolio/pith/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/Andrea/Documents/portfolio/pith/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Andrea/Documents/portfolio/pith/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Andrea/Documents/portfolio/pith/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/Andrea/Documents/portfolio/pith/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/Andrea/Documents/portfolio/pith/.cache/json/404.json"),
  "about.json": require("/Users/Andrea/Documents/portfolio/pith/.cache/json/about.json"),
  "contact.json": require("/Users/Andrea/Documents/portfolio/pith/.cache/json/contact.json"),
  "index.json": require("/Users/Andrea/Documents/portfolio/pith/.cache/json/index.json"),
  "404-html.json": require("/Users/Andrea/Documents/portfolio/pith/.cache/json/404-html.json")
}