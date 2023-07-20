import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index", name: "home" },
    { path: "/docs", component: "docs", name: "docs" },
    // { path: "/failures", component: "@/components/Table", name: "Failures"},
    { path: "/failures", component: "@/components/Iar", name: "Failures"}
  ],
  npmClient: 'pnpm',
});
