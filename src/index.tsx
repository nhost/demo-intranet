import { serve } from "bun";
import indexHtml from "./index.html";

const server = serve({
	port: 3000, // Let Bun choose an available port
	development: process.env.NODE_ENV !== "production",

	routes: {
		// Serve the React app for the root route and any unmatched routes
		"/": indexHtml,
		"/*": indexHtml,

		// // API Routes
		// "/api/hello": {
		// 	GET() {
		// 		return Response.json({
		// 			message: "Hello, world!",
		// 			method: "GET",
		// 		});
		// 	},
		// 	PUT() {
		// 		return Response.json({
		// 			message: "Hello, world!",
		// 			method: "PUT",
		// 		});
		// 	},
		// },

		// "/api/hello/:name": (req) => {
		// 	const name = req.params.name;
		// 	return Response.json({
		// 		message: `Hello, ${name}!`,
		// 	});
		// },
	},
});

// biome-ignore lint/suspicious/noConsole: Server startup message is helpful for development
console.info(`Server running at http://localhost:${server.port}`);
