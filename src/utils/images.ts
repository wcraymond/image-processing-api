import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

/* Resize image at the provided path and put the resized image in the
 * thumbnails directory */
const resize = async (
  filepath: string,
  thumbpath: string,
  width: number,
  height: number
): Promise<void> => {
  // Create thumb directory if it does not exist
  const thumbdir = path.join(__dirname, '../../assets/thumb');
  if (!fs.existsSync(thumbdir)) {
    fs.mkdirSync(thumbdir);
  }
  // Attempt image resize
  await sharp(filepath).resize(width, height).toFile(thumbpath);
};

export { resize };
