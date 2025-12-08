import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import babel from '@rollup/plugin-babel';
import copyPlugin from 'rollup-plugin-copy';

export default {
  input: 'index.html',
  output: {
    dir: 'public',
    format: 'es',
    entryFileNames: '[hash].js',
    chunkFileNames: '[hash].js',
    assetFileNames: '[hash][extname]'
  },
  preserveEntrySignatures: false,
  plugins: [
    html({ minify: true }),
    copyPlugin({
      targets: [{ src: 'assets', dest: 'public/' }]
    }),
    nodeResolve(),
    esbuild({ minify: true, target: ['chrome64', 'firefox67', 'safari11.1'] }),
    importMetaAssets(),
    babel({
      babelHelpers: 'bundled',
      plugins: [
        ['babel-plugin-template-html-minifier', {
          modules: { lit: ['html', { name: 'css', encapsulation: 'style' }] },
          failOnError: false,
          strictCSS: true,
          htmlMinifier: { collapseWhitespace: true, removeComments: true, minifyCSS: true }
        }]
      ]
    })
  ]
};
