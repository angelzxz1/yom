import Link from "next/link";

type Props = {
	to: string;
	children: JSX.Element | string;
};

const custLink = ({ to, children }: Props) => {
	return (
		<span className="before:transition-all   hover:before:w-full hover:before:left-0 bg-pink-200 overflow-hidden ml-6 before:content-[''] relative before:absolute before:w-0 before:h-px before:bottom-0 before:left-1/2 before:bg-black ">
			<Link href={to}>{children}</Link>
		</span>
	);
};

export default custLink;
