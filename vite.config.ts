import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import { viteExternalsPlugin } from 'vite-plugin-externals'

export default defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src"],
    })
  ],
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "md-3",
      formats: ["es", "cjs"],
      fileName: (format) =>
          `md-3.${
              format === "cjs" ? "cjs" : "es.js"
          }`,
    },
    optimizeDeps: {
      exclude: ["react", "react-dom"],
    },
    esbuild: {
      minify: true,
    },
  },
}));