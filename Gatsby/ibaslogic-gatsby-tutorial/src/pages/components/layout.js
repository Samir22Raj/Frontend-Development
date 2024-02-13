import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
	return (
		<div>
			<Header />
			<h1>{props.pageTitle}</h1>
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
