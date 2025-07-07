// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "esm", // ES module
      sourcemap: true,
    },
    {
      file: "dist/index.cjs",
      format: "cjs", // CommonJS
      sourcemap: true,
    },
  ],
  plugins: [resolve(), commonjs()],
};
