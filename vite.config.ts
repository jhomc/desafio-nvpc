import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://jhomc.github.io/desafio-nvpc/",
  plugins: [react()],
});
