import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  base: "https://riot.ml/",
  build: {
    outDir: "./dist",
  },
  plugins: [nodeResolve()],
};
