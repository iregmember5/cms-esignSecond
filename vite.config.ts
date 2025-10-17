// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/blogs/api": {
        target: "https://esign-admin.signmary.com",
        changeOrigin: true,
        secure: false,
        headers: {
          "X-Frontend-Url": "https://signmary.com",
        },
      },
    },
  },
});
