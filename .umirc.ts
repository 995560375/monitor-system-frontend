import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index", name: "home" },
    { path: "/docs", component: "docs", name: "docs" },
    // { path: "/failures", component: "failures", name: "failures"}
  ],
  npmClient: 'pnpm',
});
