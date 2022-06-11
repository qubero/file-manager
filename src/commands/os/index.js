import { cpus, EOL, userInfo } from 'os';
import { FMerror } from '../../logger/logger.js';

const getCpusInfo = () => (
  cpus().map(({ model, speed }) => ({
    model,
    speed: `${(speed / 1000).toFixed(2)}GHz`,
  }))
);

const osInfo = {
  '--EOL': () => console.log(JSON.stringify(EOL)),
  '--cpus': () => console.table(getCpusInfo()),
  '--homedir': () => console.log(userInfo().homedir),
  '--username': () => console.log(userInfo().username),
  '--architecture': () => console.log(process.arch),
};

const getOSinfo = ([param]) => {
  try {
    osInfo[param]();
  } catch (err) {
    throw FMerror.fail;
  }
};

export { getOSinfo };
