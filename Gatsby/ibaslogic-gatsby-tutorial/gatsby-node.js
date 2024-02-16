const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === "MarkdownRemark") {
		const slug = path.basename(node.fileAbsolutePath, ".md");
		createNodeField({
			node,
			name: "slug",
			value: slug,
		});
	}
};

//Here, we are using the async/await syntax to get a promise response from the graphql function. This response holds all of the data we need.
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const response = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);
	response.data.allMarkdownRemark.edges.forEach((edge) => {
		//So we looped through its edges array (which contains the list of posts) and then dynamically create each post page by calling the createPage function.
		createPage({
			path: `/blog/${edge.node.fields.slug}`,
			component: path.resolve("./src/templates/blog-post.js"),
			context: {
				slug: edge.node.fields.slug,
			},
		});
	});
};
