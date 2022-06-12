import { resolve } from 'path';
import { FMerror } from '../../../logger/logger.js';
import { unlink } from 'fs/promises';

const RM_PARAMS_COUNT = 1;

const deleteFile = async (params) => {
  try {
    if (params.length !== RM_PARAMS_COUNT) throw error;

    const [path] = params;
    const absPath = resolve(path);

    await unlink(absPath);
  } catch (err) {
    throw FMerror.fail;
  }
};

export { deleteFile };
