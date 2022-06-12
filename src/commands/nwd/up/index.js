import { FMerror } from '../../../logger/logger.js';

const moveUp = async (params) => {
  try {
    if (params.length) throw error;

    process.chdir('..');
  } catch (err) {
    throw FMerror.fail;
  }
};

export { moveUp };
