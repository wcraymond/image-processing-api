import fs from 'fs';
import path from 'path';

const clearThumbDirectory = (): void => {
  const thumbdir = path.join(__dirname, '../../../assets/thumb');
  fs.readdir(thumbdir, (err, files) => {
    if (err) {
      throw err;
    }
    for (const file of files) {
      fs.unlink(path.join(thumbdir, file), (err) => {
        if (err) {
          throw err;
        }
      });
    }
  });
};

export default clearThumbDirectory;
