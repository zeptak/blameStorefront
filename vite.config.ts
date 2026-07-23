import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "::",
      port: 8080,
      proxy: {
        "/api/medusa": {
          target: env.MEDUSA_API_URL || env.VITE_MEDUSA_API_URL || "https://admin.blame.cz",
          changeOrigin: true,
          rewrite: (requestPath) => requestPath.replace(/^\/api\/medusa/, "/store"),
          headers: env.MEDUSA_PUBLISHABLE_KEY || env.VITE_MEDUSA_PUBLISHABLE_KEY
            ? { "x-publishable-api-key": env.MEDUSA_PUBLISHABLE_KEY || env.VITE_MEDUSA_PUBLISHABLE_KEY }
            : undefined,
        },
      },
    },
    build: {
      outDir: "dist/spa",
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client"),
        "@shared": path.resolve(__dirname, "./shared"),
      },
    },
  };
});
