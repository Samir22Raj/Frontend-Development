import * as React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";
import Img from "gatsby-image";
import * as postStyles from "./blogPost.module.scss";

export const query = graphql`
	query ($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString: "DD MMMM, YYYY")
				featured {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			timeToRead
			html
		}
	}
`;

const BlogPost = (props) => {
	console.log(props);
	return (
		<Layout>
			<div className={postStyles.content}>
				<h1>{props.data.markdownRemark.frontmatter.title}</h1>
				<span className={postStyles.meta}>
					Posted on {props.data.markdownRemark.frontmatter.date}{" "}
					<span> / </span> {props.data.markdownRemark.timeToRead} min read
				</span>
				<Img
					className={postStyles.featured}
					fluid={
						props.data.markdownRemark.frontmatter.featured.childImageSharp.fluid
					}
					alt={props.data.markdownRemark.frontmatter.title}
				/>
				<div
					dangerouslySetInnerHTML={{
						__html: props.data.markdownRemark.html,
					}}
				></div>
			</div>
		</Layout>
	);
};

export const Head = (props) => (
	<Seo title={props.data.markdownRemark.frontmatter.title} />
);
export default BlogPost;
