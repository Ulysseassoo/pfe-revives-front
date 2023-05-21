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
			"@services": path.resolve(__dirname, "src/services"),
			"@theme": path.resolve(__dirname, "src/theme"),
			"@store": path.resolve(__dirname, "src/store"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@dummyDatas": path.resolve(__dirname, "src/dummyDatas"),
			"@interfcae": path.resolve(__dirname, "src/interface"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
		},
	},
});
