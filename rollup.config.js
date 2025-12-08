import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import html from '@web/rollup-plugin-html';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/project2-app.js',
  output: {
    dir: 'public',
    format: 'es'
  },
  plugins: [
    resolve(),
    esbuild({ target: 'es2017' }),
    html(),
    copy({
      targets: [{ src: 'src/index.html', dest: 'public/' }],
      copyOnce: true
    })
  ],
  onwarn(warning, warn) {
    if (warning.code === 'EVAL' || warning.code === 'THIS_IS_UNDEFINED') return;
    warn(warning);
  }
};
