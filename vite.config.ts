import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssConfig from "./postcss.config";
import AutoImport from 'unplugin-auto-import/vite' //按需自动加载依赖包
const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react(),AutoImport({
   imports:[
    'react',
    'react-router-dom',
   ]
  })],
  css: {
    postcss: postcssConfig,
    // preprocessorOptions: {
    //   scss: {
    //     api: "modern-compiler", // 修改api调用方式
    //   },
    // },
  },
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
