import { AppProps } from "next/app";
import Main from "../components/Main";
import "../styles/globals.css";
const MyApp = ({ Component, pageProps, router }: AppProps) => {
	return (
		<Main>
			<Component {...pageProps} />
		</Main>
	);
};

export default MyApp;
