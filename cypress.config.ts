import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    supportFile: "cypress/support/e2e.ts",
    video: true,
    screenshotsFolder: "cypress/screenshots",
    viewportWidth: 1280,
    viewportHeight: 800,
  },
});
