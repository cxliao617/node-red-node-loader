import path from "path";
import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";



function isExternal(id) {
  /*
    Here, `id` is "./db", as in
      import db from './db'
  */
  let isRelativeInternalModulePath = id.startsWith(".");

  /*
    Here, `id` is something like
      "/Users/samselikoff/Projects/oss/miragejs/miragejs/lib/identity-manager.js"
    I'm not sure how this happens, but it's referencing an internal module, so
    it shouldn't be treated as external.
  */
  let isAbsoluteInternalModulePath = id.includes(
    path.join(process.cwd(), "src")
  );

  /*
    Here, `id` is something like '@lib/assert', which is not a path but does
    reference an internal module. So it shouldn't be treated as external.
  */

  return (
    !isRelativeInternalModulePath && !isAbsoluteInternalModulePath 
  );
}

let esm = {
  input: "src/NodeLoader.js",
  output: { file: `dist/NodeLoader.esm.js`, sourcemap: true, format: "esm" },
  external: isExternal,
  plugins: [
    babel({
      exclude: "node_modules/**",
      sourceMaps: true,
      presets: [["@babel/preset-env", {}]],
    }),
  ],
};

let cjs = {
  input: "src/NodeLoader.js",
  output: {
    file: `dist/NodeLoader.cjs.js`,
    sourcemap: true,
    format: "cjs",
    esModule: true,
  },
  external: isExternal,
  plugins: [
    babel({
      exclude: "node_modules/**",
      sourceMaps: true,
      presets: [
        [
          "@babel/preset-env",
          {
            targets: { node: "current" },
          },
        ],
      ],
    }),
    nodeResolve(),
  ],
};


export default [esm, cjs];