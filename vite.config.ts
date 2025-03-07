export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["lucide-react"],
  },
  root: ".", // project root
  publicDir: "public", // ensure this line exists
  build: {
    outDir: "dist",
  },
});
