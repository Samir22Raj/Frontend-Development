/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	plugins: [],
};

module.exports = {
	siteMetadata: {
		title: "My First Gatsby Site",
	},
	plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp"],
};
