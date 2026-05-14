import { createLazyFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createLazyFileRoute("/")({
	component: HomeRoute,
});

function HomeRoute() {
	return (
		<App />
	);
}
