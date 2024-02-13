import React from "react";
import Layout from "./components/layout";

const Blog = () => {
	return (
		<Layout pageTitle="Blog Page">
			<div>
				<p>Blog posts will be displayed here!</p>
			</div>
		</Layout>
	);
};

export const Head = () => <title>Blog Page</title>;
export default Blog;
