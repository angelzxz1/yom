import { RiSunLine } from "react-icons/ri";
import { RiMoonFill } from "react-icons/ri";
import { useToggleColorMode } from "../hooks/useColor";

const ToggleColorMode = (): JSX.Element => {
	const { toggleColorMode, colorMode } = useToggleColorMode();
	return (
		<button
			className={`absolute right-0 mr-6 rounded-full ${
				colorMode === "dark" ? "bg-teal-300 " : "bg-teal-700 text-white"
			} p-2`}
			onClick={toggleColorMode}
		>
			{colorMode === "dark" ? <RiMoonFill /> : <RiSunLine />}
		</button>
	);
};

export default ToggleColorMode;
