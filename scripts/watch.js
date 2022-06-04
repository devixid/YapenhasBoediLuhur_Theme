import ESBuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import path from 'path';

ESBuild.build({
  entryPoints: [path.resolve(process.cwd(), 'src/js/main.js'), path.resolve(process.cwd(), 'src/styles/root.scss')],
  minify: true,
  assetNames: 'assets/[hash]',
  chunkNames: '[ext]/[hash].[ext]',
  outdir: 'dist',
  bundle: true,
  sourcemap: true,
  watch: true,
  allowOverwrite: true,
  plugins: [
    sassPlugin({
      async transform(sources) {
        const { css } = await postcss([autoprefixer, cssnano]).process(sources);
        return css;
      }
    })
  ]
})
  .then(() => {
    console.log('Compiled successfully');
  })
  .catch((err) => {
    console.error(err);
  });
