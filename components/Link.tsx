import Link from "next/link";
import { useColorMode } from "../hooks/useColor";
type Props = {
	to: string;
	children: JSX.Element | string;
	path: string;
};

const custLink = ({ to, children, path }: Props) => {
	const isActive = path === to;
	const { colorMode } = useColorMode();
	return (
		<span
			className={`
			overflow-hidden
			ml-6
			relative
			font-bold
			transition-all
			duration-150
			hover:skew-y-12
			${colorMode === "dark" ? "text-white" : "text-black"}

			before:transition-all
			hover:before:w-full
			hover:before:left-0			
			before:content-['']
			
			before:absolute
			before:w-0 before:h-px 
			before:bottom-0 before:left-1/2 
			before:bg-black
			`}
		>
			<Link href={to}>{children}</Link>
		</span>
	);
};

export default custLink;
