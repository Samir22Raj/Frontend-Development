import React from "react";
import Layout from "../components/layout";
import { Link, useStaticQuery, graphql } from "gatsby";
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
							fields {
								slug
							}
						}
					}
				}
			}
		`
	);
	console.log(staticdata);

	//exporting page query should be done outside the component definition
	//check blog-post for example of page query and query variable

	return (
		<Layout pageTitle="Blog Page">
			<div>
				<p>Blog posts will be displayed here!</p>
				<ul className="blogs">
					{staticdata.allMarkdownRemark.edges.map((edge) => {
						return (
							<li key={edge.node.id}>
								<h2>
									<Link to={`/blog/${edge.node.fields.slug}/`}>
										{edge.node.frontmatter.title}
									</Link>
								</h2>
								<div>
									<span>
										Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
										{edge.node.timeToRead} min read
									</span>
								</div>
								<p>{edge.node.excerpt}</p>
								<div>
									<Link to={`/blog/${edge.node.fields.slug}/`}>Read More</Link>
								</div>
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

export const Head = () => <Seo title="Blog Page" />;
//export const Head = () => <title>Blog page</title>;
export default Blog;
