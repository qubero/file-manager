import { open } from 'fs/promises';
import { resolve } from 'path';
import { FMerror } from '../../../logger/logger.js';

const CAT_PARAMS_COUNT = 1;

const addFile = async (params) => {
  try {
    if (params.length !== CAT_PARAMS_COUNT) throw error;

    const [path] = params;
    const absPath = resolve(path);

    (await open(absPath, 'wx'))?.close();
  } catch (err) {
    throw FMerror.fail;
  }
}

export { addFile };
