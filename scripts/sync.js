// resize image:
// @1000, @1600
// make webp: original, @1000, @1600
// compress images
// upload to S3

const sharp = require('sharp');
const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const sizes = [1000, 1600];

const resize = (file, size, quality) => {
  const ext = path.extname(file);
  const outputFile = file.replace(ext, `@${size}${ext}`);
  return Jimp.read(file)
    .then(lenna => {
      return lenna
        .resize(size || Jimp.AUTO, Jimp.AUTO)
        .quality(quality)
        .write(outputFile);
    })
    .catch(err => {
      console.error(err);
    });
};

const towebp = (file, size) => {
  const ext = path.extname(file);
  const outputFile = file.replace(ext, `@${size}.webp`);
  const buffer = fs.readFileSync(file);
  return sharp(buffer)
    .resize(size)
    .toFile(outputFile);
};
