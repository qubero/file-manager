import { resolve } from 'path';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { createCustomWriteStream } from '../../utils/index.js';
import { pipeline } from 'stream/promises';
import { FMerror } from '../../logger/logger.js';

const HASH_PARAMS_COUNT = 1;

const calcHash = async (params) => {
  try {
    if (params.length !== HASH_PARAMS_COUNT) throw error;

    const [path] = params;
    const absPath = resolve(path);
    const hash = createHash('sha256');

    await pipeline(
      createReadStream(absPath),
      hash.setEncoding('hex'),
      createCustomWriteStream()
    );
  } catch (err) {
    throw FMerror.fail;
  }
}

export { calcHash };
