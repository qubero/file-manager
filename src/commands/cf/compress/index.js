import { open } from 'fs/promises';
import { resolve } from 'path';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { FMerror } from '../../../logger/logger.js';

const C_PARAMS_COUNT = 2;

const compress = async (params) => {
  let fhs = null,
      fhd = null;

  try {
    if (params.length !== C_PARAMS_COUNT) throw error;

    const [fromPath, toPath] = params;
    const absFromPath = resolve(fromPath);
    const absToPath = resolve(toPath);

    const brotliCompress = createBrotliCompress();

    fhs = await open(absFromPath, 'r');
    fhd = await open(absToPath, 'wx');

    await pipeline(
      fhs.createReadStream(),
      brotliCompress,
      fhd.createWriteStream()
    );
  } catch (err) {
    throw FMerror.fail;
  } finally {
    await fhs?.close();
    await fhd?.close();
  }
};

export { compress };
