import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/project_management_app_React-Tailwind/",
  plugins: [react()],
});
