import Link from "./Link";

const NavBar = () => {
	return (
		<nav className="h-12 bg-yellow-200 flex justify-center items-center">
			<div className="w-3/4 bg-blue-300 ">
				<div>
					<Link to="/">Home</Link>
					<Link to="/about">about</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
