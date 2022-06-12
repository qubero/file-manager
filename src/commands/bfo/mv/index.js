import { parse, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { FMerror } from '../../../logger/logger.js';
import { unlink } from 'fs/promises';

const CP_PARAMS_COUNT = 2;

const moveFile = async (params) => {
  try {
    if (params.length !== CP_PARAMS_COUNT) throw error;

    const [fromPath, toPath] = params;
    const absFromPath = resolve(fromPath);
    const { base } = parse(absFromPath);
    const absToPath = resolve(toPath, base);

    await pipeline(
      createReadStream(absFromPath),
      createWriteStream(absToPath)
    );

    await unlink(absFromPath);
  } catch (err) {
    throw FMerror.fail;
  }
};

export { moveFile };
