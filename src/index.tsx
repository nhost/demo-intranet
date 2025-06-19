import { serve } from "bun";
import indexHtml from "./index.html";

const server = serve({
	port: 3000, // Let Bun choose an available port
	development: process.env.NODE_ENV !== "production",

	routes: {
		"/": indexHtml,
		"/*": indexHtml,
	},
});

// biome-ignore lint/suspicious/noConsole: Server startup message is helpful for development
console.info(`Server running at http://localhost:${server.port}`);
