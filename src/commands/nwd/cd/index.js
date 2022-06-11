import { isAbsolute, join } from 'path';
import { FMerror } from '../../../logger/logger.js';

const CD_PARAMS_COUNT = 1;

const changeDirectory = async (params) => {
  try {
    if (params.length !== CD_PARAMS_COUNT) throw error;

    let [path] = params;

    if (!isAbsolute(path)) {
      path = join(process.cwd(), path);
    }

    process.chdir(path);
  } catch (err) {
    throw FMerror.fail;
  }
};

export { changeDirectory };
