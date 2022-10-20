import Head from "next/head";
import NavBar from "./NavBar";
import React from "react";
import { Html } from "next/document";
type Props = {
	children: JSX.Element;
	router: any;
};

const Main = ({ children, router }: Props) => {
	return (
		<div>
			<NavBar path={router.asPath} />
			<main
				className="
				pt-12
				max-w-4xl
				ml-auto
				mr-auto

			"
			>
				{children}
			</main>
		</div>
	);
};

export default Main;
