import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "src",
  plugins: [tailwindcss()],
  base: "/test-web/",
  build: {
    outDir: "./dist",
    assetsDir: "./assets",
  },
});
