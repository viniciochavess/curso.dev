import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,        // ✅ garante que 'test', 'expect', 'describe' existam
    environment: 'node',
    setupFiles: './vitest.setup.js'
  }
})
