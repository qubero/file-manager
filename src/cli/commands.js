import { getOSinfo } from '../commands/index.js';

const commands = new Map(Object.entries({
  os: {
    usage: 'os --[param]',
    descr: 'Operating system info',
    action: getOSinfo,
  },
  '.exit': {
    usage: '.exit',
    descr: '',
    action: () => process.exit(),
  }
}));

export { commands as FMcommands };
