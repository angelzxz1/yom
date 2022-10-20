import { AppProps } from "next/app";
import Main from "../components/Main";
import "../styles/globals.css";
const MyApp = ({ Component, pageProps, router }: AppProps) => {
	// console.log(router);
	return (
		<Main router={router} >
			<Component {...pageProps} />
		</Main>
	);
};

export default MyApp;
