import Head from "next/head";
import NavBar from "./NavBar";
import React from "react";

type Props = {
	children: JSX.Element;
};

const Main = ({ children }: Props) => {
	return (
		<div>
			<NavBar />
			<main>{children}</main>
		</div>
	);
};

export default Main;
