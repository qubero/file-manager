import { resolve } from 'path';
import { createReadStream } from 'fs';
import { createCustomWriteStream } from '../../../utils/index.js';
import { pipeline } from 'stream/promises';
import { FMerror } from '../../../logger/logger.js';

const CAT_PARAMS_COUNT = 1;

const catFile = async (params) => {
  try {
    if (params.length !== CAT_PARAMS_COUNT) throw error;

    const [path] = params;
    const absPath = resolve(path);

    await pipeline(
      createReadStream(absPath, { encoding: 'utf8' }),
      createCustomWriteStream()
    );
  } catch (err) {
    throw FMerror.fail;
  }
}

export { catFile };
