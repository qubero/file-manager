import { parse, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { FMerror } from '../../../logger/logger.js';

const CP_PARAMS_COUNT = 2;

const copyFile = async (params) => {
  try {
    if (params.length !== CP_PARAMS_COUNT) throw error;

    const [fromPath, toPath] = params;
    const absFromPath = resolve(fromPath);
    const { base } = parse(fromPath);
    const absToPath = resolve(toPath, base);

    await pipeline(
      createReadStream(absFromPath),
      createWriteStream(absToPath)
    );
  } catch (err) {
    throw FMerror.fail;
  }
};

export { copyFile };
