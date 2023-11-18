import path from "path";

export default {
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      name: "H1Tool",
      fileName: "index"
    }
  }
};

//Invalid value "mjs" for option "output.format" - Valid values are "amd", "cjs", "system", "es", "iife" or "umd".