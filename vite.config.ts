import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/will-u-be-my-valentine-",
  plugins: [react()],
});
