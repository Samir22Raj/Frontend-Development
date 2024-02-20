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
		//Registering the installed plugins for the website
		//plugin for runnuing sass compiler in gatsby
		"gatsby-plugin-sass",
		//plugin used to add static image in gatsby
		"gatsby-plugin-image",
		//plugins for optimizing the images that are to be in blog posts.
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images/`,
			},
		},
		//instances of gatsy-source-filesystem plugin
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "posts",
				path: `${__dirname}/src/posts/`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "blogs",
				path: `${__dirname}/blogs/`,
			},
		},
	],
};
