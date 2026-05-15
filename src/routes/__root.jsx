import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { GlobalZIndexCounterContext, ThemeProvider } from "../contexts";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const zIndexCounterHook = React.useState(1);

	return (
		<ThemeProvider>
			<GlobalZIndexCounterContext value={zIndexCounterHook}>
				<React.Fragment>
					<Outlet />
				</React.Fragment>
			</GlobalZIndexCounterContext>
		</ThemeProvider>
	);
}
