import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import esbuild from 'rollup-plugin-esbuild';
import pkg from 'rollup-plugin-copy';
const copy = pkg;

export default {
  // Your app still uses index.html as the entry point
  input: 'index.html',

  output: {
    entryFileNames: '[hash].js',
    chunkFileNames: '[hash].js',
    assetFileNames: '[hash][extname]',
    format: 'es',
    dir: 'public',   // Output folder stays the same
  },

  preserveEntrySignatures: false,

  plugins: [
    /** Enable using HTML as rollup entrypoint */
    html({
      minify: true,
    }),

    /** Copies assets folder → public/assets */
    copy({
      targets: [
        {
          src: 'assets',
          dest: 'public/',
          flatten: false,
        },
      ],
    }),

    /** Resolve bare module imports for Lit, DDDSuper, etc */
    nodeResolve(),

    /** Compile + minify JS */
    esbuild({
      minify: true,
      target: ['chrome64', 'firefox67', 'safari11.1'],
    }),

    /** Bundle assets referenced via import.meta.url */
    importMetaAssets(),

    /** Minify Lit HTML & CSS tagged templates */
    babel({
      plugins: [
        [
          'babel-plugin-template-html-minifier',
          {
            modules: { lit: ['html', { name: 'css', encapsulation: 'style' }] },
            failOnError: false,
            strictCSS: true,
            htmlMinifier: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeComments: true,
              caseSensitive: true,
              minifyCSS: true,
            },
          },
        ],
      ],
    }),
  ],
};
