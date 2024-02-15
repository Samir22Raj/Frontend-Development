import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo";

const Blog = () => {
	//using a static query
	const staticdata = useStaticQuery(
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
	console.log(staticdata);
	return (
		<Layout pageTitle="Blog Page">
			<div>
				<p>Blog posts will be displayed here!</p>
				<ul>
					{staticdata.allMarkdownRemark.edges.map((edge) => {
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

/*
can also use:
	<article key={node.id}>
    	<h2>{edge.node.frontmatter.title}</h2>
        <p>Posted: {egde.node.frontmatter.date}</p>
		....
    </article>
if not using ul tag
*/

//export page query
// export const query = graphql`
// 	query allPosts {
// 		allMarkdownRemark {
// 			nodes {
// 				id
// 				frontmatter {
// 					date
// 					slug
// 					title
// 				}
// 			}
// 		}
// 	}
// `;
export const Head = () => <Seo title="Blog Page" />;
//export const Head = () => <title>Blog page</title>;
export default Blog;
