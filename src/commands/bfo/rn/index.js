import { dirname, resolve } from 'path';
import { FMerror } from '../../../logger/logger.js';
import { rename } from 'fs/promises';

const RN_PARAMS_COUNT = 2;

const renameFile = async (params) => {
  try {
    if (params.length !== RN_PARAMS_COUNT) throw error;

    const [path, name] = params;
    const absFromPath = resolve(path);
    const absToPath = resolve(dirname(absFromPath), name);

    await rename(absFromPath, absToPath);
  } catch (err) {
    throw FMerror.fail;
  }
};

export { renameFile };
