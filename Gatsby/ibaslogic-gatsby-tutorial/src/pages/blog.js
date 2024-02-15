import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo";

const Blog = () => {
	const data = useStaticQuery(
		graphql`
			query {
				allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
					edges {
						node {
							frontmatter {
								title
								date(formatString: "DD MMMM, YYYY")
							}
							timeToRead
							excerpt
							id
						}
					}
				}
			}
		`
	);
	return (
		<Layout pageTitle="Blog Page">
			<div>
				<p>Blog posts will be displayed here!</p>
				<ul>
					{data.allMarkdownRemark.edges.map((edge) => {
						return (
							<li key={edge.node.id}>
								<h2>{edge.node.frontmatter.title}</h2>
								<div>
									<span>
										Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
										{edge.node.timeToRead} min read
									</span>
								</div>
								<p>{edge.node.excerpt}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
};

export const Head = () => <Seo title="Blog Page" />;
//export const Head = () => <title>Blog page</title>;
export default Blog;
