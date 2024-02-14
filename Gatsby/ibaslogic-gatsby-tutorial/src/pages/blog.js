import React from "react";
import Layout from "./components/layout";
//import Seo from "./components/seo";

const Blog = () => {
	return (
		<Layout pageTitle="Blog Page">
			<div>
				<p>Blog posts will be displayed here!</p>
			</div>
		</Layout>
	);
};

//export const Head = () => <Seo title="Blog Page" />;
export const Head = () => <title>Blog page</title>;
export default Blog;
