import sharp from 'sharp';
import path from 'path';
import * as fs from 'fs/promises'; // Utiliza fs.promises para operaciones asincrónicas

const directory = path.join(process.cwd(), 'src/assets/icon/');

(async () => {
  try {
    const files = await fs.readdir(directory);
    await Promise.all(
      files.map(async (file) => {
        try {
          const imagePath = `${directory}/${file}`;
          const image = sharp(imagePath);
          const name = file.split('.')[0];
          const { format } = await image.metadata();
          if (
            !name.includes('small') &&
            !name.includes('medium') &&
            !name.includes('large') &&
            (format === 'png' || format === 'webp')
          ) {
            await Promise.all([
              image.resize(450).toFile(`${directory}/${name}-small.${format}`),
              image.resize(750).toFile(`${directory}/${name}-medium.${format}`),
              image.resize(1800).toFile(`${directory}/${name}-large.${format}`),
            ]);
          }
        } catch (error) {
          console.log(`Error al procesar la imagen: ${file}`);
        }
      })
    );
    console.log('Procesamiento de imágenes completo.');
  } catch (error) {
    console.log('Error al leer el directorio de imágenes:', error);
  }
})();
