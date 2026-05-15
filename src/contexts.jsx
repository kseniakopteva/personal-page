import { Children, createContext, useState } from "react";

export const GlobalZIndexCounterContext = createContext();
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [theme] = useState("xp");

	// TODO: switch all either to tailwind or style objects
	const themes = [
		{
			name: "xp",
			window: "xp-window",
			windowBody: {
				general: "",
				open: "border-b rounded-b",
				closed: "",
			},
			windowTopBar: "xp-top-bar",
			mainBg: {
				backgroundImage:
					"url(https://images.unsplash.com/photo-1518717202715-9fa9d099f58a?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
			},
			button: "xp-button",
		},
		{
			name: "other",
			window: "min-h-3 border border-emerald-800",
			windowBody: {
				general: "",
				open: "",
				closed: "",
			},
			windowTopBar: "border-b border-emerald-800 p-1 bg-emerald-600",
			mainBg: {
				backgroundImage: "url('../public/img/patterns/bg-grid.gif')",
				backgroundRepeat: "repeat",
			},
		},
	];

	function getCurrentTheme(name) {
		return themes.find((theme) => theme.name === name);
	}

	const currentTheme = getCurrentTheme(theme);

	return (
		<ThemeContext.Provider
			value={{
				themeWindowClasses: currentTheme.window,
				themeBodyClasses: currentTheme.windowBody.general,
				themeOpenBodyClasses: currentTheme.windowBody.open,
				themeClosedBodyClasses: currentTheme.windowBody.closed,
				themeTopBarClasses: currentTheme.windowTopBar,
				themeMainBackgroundObject: currentTheme.mainBg,
				themePrimaryButtonStyles: currentTheme.button,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}
