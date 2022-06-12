import { cpus, EOL, userInfo } from 'os';
import { FMerror } from '../../logger/logger.js';

const getCpusInfo = () => {
  const cpusInfo = cpus().reduce((acc, { model, speed }, index) => {
    const del = (speed < 1000 && speed > 10) ? 10 : 1000;

    acc[index + 1] = {
      model: model.split(' @')[0],
      speed: `${(speed / del).toFixed(2)}GHz`,
    };
    return acc;
  }, {});
  const overall = `Overall amount of CPUs: ${cpus().length}`;

  return { overall, cpusInfo };
};

const osInfo = {
  '--EOL': () => console.log(JSON.stringify(EOL)),
  '--cpus': () => {
    const { overall, cpusInfo } = getCpusInfo();
    console.log(overall);
    console.table(cpusInfo);
  },
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
