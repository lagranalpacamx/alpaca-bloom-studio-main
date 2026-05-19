import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Custom Worker entry wraps TanStack Start with branded SSR error pages (src/server.ts).
export default defineConfig({
  server: {
    port: 3000,
    strictPort: false,
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
  ],
});
