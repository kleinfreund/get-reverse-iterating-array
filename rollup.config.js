import { defineConfig } from 'rollup'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  input: 'src/get-reverse-iterating-array.ts',
  output: {
    dir: 'dist',
  },
  plugins: [
    typescript(),
    terser({
      output: {
        comments: false,
        ecma: 2020,
      },
    }),
  ],
})
