/** @type {import('next-sitemap').IConfig} */
const siteUrl = "https://www.omnidoc.ma/";
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      `https://www.omnidoc.ma/sitemap.xml`,
      `https://www.omnidoc.ma/server-sitemap.xml`,
    ],
  },
};
