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
		description: "Site made using React, GraphQL and Gatsby",
		author: "Samir",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-remark",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "blogs",
				path: `${__dirname}/blogs`,
			},
			resolve: "gatsby-source-filesystem",
			options: {
				name: "posts",
				path: `${__dirname}/src/posts`,
			},
		},
	],
};
