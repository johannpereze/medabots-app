import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
});

/* "define" prevents
 * Uncaught ReferenceError: global is not defined
 */
