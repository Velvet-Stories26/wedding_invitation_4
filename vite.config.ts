import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const [owner, repository] = process.env["GITHUB_REPOSITORY"]?.split("/") ?? [];
const isGitHubPagesBuild = process.env["GITHUB_ACTIONS"] === "true";
const isUserOrOrganizationSite = repository?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

export default defineConfig({
  base: isGitHubPagesBuild && repository && !isUserOrOrganizationSite ? `/${repository}/` : "/",
  plugins: [tanstackRouter({ target: "react" }), react(), tailwindcss()],
  resolve: { tsconfigPaths: true },
});
