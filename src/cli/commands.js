import { listFiles, changeDirectory, getOSinfo } from '../commands/index.js';

const commands = new Map(Object.entries({
  ls: {
    usage: 'ls',
    descr: 'List all files and folder in current directory',
    action: listFiles,
  },
  up: {
    usage: 'up',
    descr: 'Go upper from current directory',
    action: changeDirectory.bind(undefined, ['..']),
  },
  cd: {
    usage: 'cd path_to_directory',
    descr: 'Go to dedicated folder from current directory (path_to_directory can be relative or absolute)',
    action: changeDirectory,
  },
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
