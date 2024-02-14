import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/style.scss";
import * as layoutStyles from "./layout.module.scss";

const Layout = (props) => {
	return (
		<div className={layoutStyles.container}>
			<div className={layoutStyles.content}>
				<Header />
				<div className={layoutStyles.mainContent}>
					<h1>{props.pageTitle}</h1>
					{props.children}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
