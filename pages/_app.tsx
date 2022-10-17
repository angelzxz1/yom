import { AppProps } from "next/app";
import Main from "../componets/layouts/Main";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
	<Main>
		<Component {...pageProps} />		
	</Main>
	);
};

export default MyApp;
