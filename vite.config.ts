import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@theme": path.resolve(__dirname, "src/theme"),
			"@dummyDatas": path.resolve(__dirname, "src/dummyDatas"),
			"@interfcae": path.resolve(__dirname, "src/interface"),
		},
	},
});
