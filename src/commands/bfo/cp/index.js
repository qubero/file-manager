import { basename, resolve } from 'path';
import { open } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { FMerror } from '../../../logger/logger.js';

const CP_PARAMS_COUNT = 2;

const copyFile = async (params) => {
  let fhs = null,
      fhd = null;

  try {
    if (params.length !== CP_PARAMS_COUNT) throw error;

    const [fromPath, toPath] = params;
    const absFromPath = resolve(fromPath);
    const absToPath = resolve(toPath, basename(fromPath));

    fhs = await open(absFromPath, 'r');
    fhd = await open(absToPath, 'wx');

    await pipeline(
      fhs.createReadStream(),
      fhd.createWriteStream()
    );
  } catch (err) {
    throw FMerror.fail;
  } finally {
    await fhs?.close();
    await fhd?.close();
  }
};

export { copyFile };
