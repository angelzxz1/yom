import { useState, useEffect } from "react";
import React from "react";
export const useColorMode = () => {
	const [colorMode, setColorMode] = useState<"light" | "dark">("light");

	useEffect(() => {
		console.log(localStorage.theme);
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setColorMode("dark");
		} else {
			setColorMode("light");
		}
	}, []);

	return { colorMode, setColorMode };
};

export const useToggleColorMode = () => {
	const { colorMode, setColorMode } = useColorMode();
	useEffect(() => {
		if (colorMode === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [colorMode]);

	const toggleColorMode = () => {
		if (colorMode === "light") {
			setColorMode("dark");
			document.documentElement.classList.add("dark");
		} else {
			setColorMode("light");
			document.documentElement.classList.remove("dark");
		}
	};
	return { colorMode, toggleColorMode };
};
