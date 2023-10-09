import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import webp from 'imagemin-webp';
import path from 'path';

const currentFileUrl = import.meta.url;
const currentDir = path.dirname(currentFileUrl);
const sourcePath = path.join(currentDir, 'src/assets/');
const destinationPath = path.join(currentDir, 'src/assets/');

const files = await imagemin([`${sourcePath}/*.{jpg,png}`], {
  destination: destinationPath,
  plugins: [
    imageminJpegtran(),
    imageminPngquant({
      quality: [0.6, 0.8]
    }),
    webp({ quality: 80 })
  ]
});

console.log(files);
