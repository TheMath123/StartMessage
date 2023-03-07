import { defineConfig } from "vite";
import postcss from "postcss";

export default defineConfig({
  plugins: [postcss()],
  build: {
    outDir: "dist", // altere "public" para o nome da pasta de saída desejada
  },
});
