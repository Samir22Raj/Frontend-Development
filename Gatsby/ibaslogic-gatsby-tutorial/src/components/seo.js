import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	//using the data inside of our JSX to get the title
	const m_title = data.site.siteMetadata.title;
	console.log(m_title);

	return (
		<title>
			{title} | {m_title}
		</title>
	);
};

export default Seo;
