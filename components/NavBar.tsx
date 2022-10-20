import Link from "./Link";
import ToggleColorMode from "./ToggleColorMode";
type Props = {
	path: string;
};

const NavBar = ({ path }: Props) => {
	return (
		<nav
			className="
				w-full
				fixed
				backdrop-blur-[10px]
				z-50

			"
		>
			<div
				className="
					flex
					flex-wrap
					max-w-4xl
					items-center
					p-2
					justify-between
					ml-auto
					mr-auto
					relative
					before:content-['']
					before:absolute
					rounded-full
					before:top-0
					before:bottom-0
					before:left-[-40px]
					before:w-[40px]

					before:rounded-full
					before:bg-transparent
					z-[100]


					after:content-['']

				"
			>
				<div>
					<Link path={path} to="/">
						Home
					</Link>
					<Link path={path} to="/about">
						About
					</Link>
				</div>
				<ToggleColorMode />
			</div>
		</nav>
	);
};

export default NavBar;
