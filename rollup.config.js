import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import html from '@web/rollup-plugin-html';
import { terser } from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/project2-app.js',
  output: {
    dir: 'public',
    format: 'es'
  },
  plugins: [
    resolve(),
    esbuild(),
    html({ minify: true }),
    terser(),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'public/' }
      ]
    })
  ]
};

