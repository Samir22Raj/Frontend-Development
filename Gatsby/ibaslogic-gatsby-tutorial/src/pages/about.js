import React from "react";
import Layout from "./components/layout";

const About = () => {
	return (
		<Layout pageTitle="About Page">
			<div>
				<p>Ibas is a web developer, teacher and a creative writer.</p>
			</div>
		</Layout>
	);
};

export const Head = () => <title>About Page</title>;

export default About;
