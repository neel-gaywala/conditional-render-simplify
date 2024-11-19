import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    resolve(), // Resolves node_modules dependencies
    commonjs(), // Converts CommonJS modules to ES6
    typescript(), // Compiles TypeScript
  ],
  external: [], // No external dependencies
};
