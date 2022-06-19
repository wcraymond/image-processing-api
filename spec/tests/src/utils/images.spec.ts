import fs from 'fs';
import path from 'path';
import { resize } from '../../../../src/utils/images';
import clearThumbDirectory from '../../../helpers/clearThumbDirectory';

describe('Image resizing utility tests', async () => {
  it('should resolve when a valid filename and size are provided', async () => {
    const filename = 'fjord';
    const width = 200;
    const height = 200;
    const filepath = path.join(
      __dirname,
      '../../../../assets/full',
      `${filename}.jpeg`
    );
    const thumbpath = path.join(
      __dirname,
      '../../../../assets/thumb',
      `${filename}_${width}_${height}.jpeg`
    );
    await expectAsync(
      resize(filepath, thumbpath, width, height)
    ).toBeResolved();
  });

  it('should place a resized image in the thumbs directory', async () => {
    const filename = 'icelandwaterfall';
    const width = 200;
    const height = 200;
    const filepath = path.join(
      __dirname,
      '../../../../assets/full',
      `${filename}.jpeg`
    );
    const thumbpath = path.join(
      __dirname,
      '../../../../assets/thumb',
      `${filename}_${width}_${height}.jpeg`
    );
    await resize(filepath, thumbpath, width, height);
    expect(fs.existsSync(thumbpath)).toBeTruthy();
  });

  it('should fail if the file does not exist', async () => {
    const filename = 'doesNotExist';
    const width = 200;
    const height = 200;
    const filepath = path.join(
      __dirname,
      '../../../../assets/full',
      `${filename}.jpeg`
    );
    const thumbpath = path.join(
      __dirname,
      '../../../../assets/thumb',
      `${filename}_${width}_${height}.jpeg`
    );
    await expectAsync(
      resize(filepath, thumbpath, width, height)
    ).toBeRejectedWithError();
  });

  afterAll(() => {
    clearThumbDirectory();
  });
});
