import { resolve } from 'path';
import { readdir } from 'fs/promises';
import { FMerror } from '../../../logger/logger.js';

const listFiles = async (params) => {
  try {
    if (params.length) throw error;

    const cwdPath = resolve(process.cwd());
    const contents = await readdir(cwdPath);
    console.log(contents);
  } catch (err) {
    throw FMerror.fail;
  }
};

export { listFiles };
