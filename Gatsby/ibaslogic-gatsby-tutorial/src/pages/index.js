import React from "react";
import Layout from "./components/layout";

const Index = () => {
	return (
		<Layout pageTitle="Home Page">
			<div>
				<h2>I'm Ibas, a teacher and a Gatsby.js developer</h2>
			</div>
		</Layout>
	);
};

export const Head = () => <title>Home Page</title>;
export default Index;
