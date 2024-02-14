import React from "react";
import Layout from "./components/layout";
//import Seo from "./components/seo";

const Contact = () => {
	return (
		<Layout pageTitle="Contact Us">
			<div>
				<p>You can find Ibas on Twitter via @ibaslogic</p>
			</div>
		</Layout>
	);
};

//export const Head = () => <Seo title="Contact Us" />;
export const Head = () => <title>Contact Us</title>;
export default Contact;
