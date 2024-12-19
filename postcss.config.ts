import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import {ProcessOptions} from "postcss";
export default {
  plugins: [
    tailwindcss({
      config: "./tailwind.config.ts",
    }),
    autoprefixer()
  ],
} as ProcessOptions;

