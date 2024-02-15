import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const About = () => {
	return (
		<Layout pageTitle="About Page">
			<div>
				<p>Ibas is a web developer, teacher and a creative writer.</p>
			</div>
		</Layout>
	);
};

export const Head = () => <Seo title="About Us" />;
//export const Head = () => <title>About Us</title>;
export default About;
