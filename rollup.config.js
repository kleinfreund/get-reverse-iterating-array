import { defineConfig } from 'rollup'
import terser from '@rollup/plugin-terser'

export default defineConfig({
	input: 'src/get-reverse-iterating-array.js',
	output: {
		dir: 'dist',
	},
	plugins: [
		terser({
			output: {
				comments: false,
				ecma: 2020,
			},
		}),
	],
})
