require("dotenv").config();

const contentfulManagement = require("contentful-management");

const CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN =
  process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(CONTENTFUL_ENVIRONMENT));
};