import filesize from 'rollup-plugin-filesize';
import svelte from "rollup-plugin-svelte";
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import replace from '@rollup/plugin-replace';
// import postcss from 'rollup-plugin-postcss';
import css from 'rollup-plugin-css-only';
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/index.js",
    output: {
        sourcemap: true,
        file: 'public/dist/index.js',
        format: 'esm',
    },
    onwarn(warning) {
        if (warning.code !== 'THIS_IS_UNDEFINED') {
            console.error(`(!) ${warning.message}`);
        }
    },
    plugins: [
        replace({ 'Reflect.decorate': 'undefined' }),
        svelte({
            emitCss: true,
            compilerOptions: {
				dev: !production
			}
        }),
        css({ output: 'index.css' }),
        resolve({
            browser: true,
            dedupe: ["svelte"]
        }),
        typescript(),
        terser({
            module: true,
            warnings: true,
            mangle: {
                properties: {
                    regex: /^__/,
                },
            },
        }),
        filesize({
            showBrotliSize: true,
        }),
    ],
};