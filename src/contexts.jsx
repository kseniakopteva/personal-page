import { Children, createContext, useState } from "react";

export const GlobalZIndexCounterContext = createContext();
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [theme] = useState("other");

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
			window: "min-h-3 border-[2px]  border-emerald-800 border-y-emerald-600 rounded-t-lg  d[box-shadow:_0px_0px_5px_0px_#065f46,_0px_0px_0px_1px_#065f46]",
			windowBody: {
				general: "rounded-b",
				open: "rounded-b",
				closed: "rounded-b-lg",
			},
			windowTopBar: {
				general:
					"p-1 bg-emerald-600/80 rounded-t-lg [box-shadow:_inset_0px_0px_0_2px_#065f46]f [box-shadow:inset_0px_3px_6px_3px_rgba(255,255,255,0.5)] inset_0px_0px_1px_1px_#065f46,",
				open: "border-b-[1px] border-emerald-700",
				closed: "rounded-b-lg",
			},
			mainBg: {
				backgroundImage: "url('../public/img/patterns/bg-grid.gif')",
				backgroundRepeat: "repeat",
			},
			button: "border-2 border-emerald-500 rounded-lg bg-emerald-200 hover:scale-102 font-bold text-emerald-900 active:scale-98 [box-shadow:inset_2px_2px_#a7f3d0,inset_5px_5px_5px_2px_#FFF]",
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
				themeTopBarClasses: currentTheme.windowTopBar.general,
				themeTopBarOpenClasses: currentTheme.windowTopBar.open,
				themeTopBarClosedClasses: currentTheme.windowTopBar.closed,
				themeMainBackgroundObject: currentTheme.mainBg,
				themePrimaryButtonStyles: currentTheme.button,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}
