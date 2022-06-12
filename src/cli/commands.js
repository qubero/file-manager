import { listFiles, changeDirectory, getOSinfo, calcHash, addFile, catFile, copyFile, moveFile, deleteFile, renameFile } from '../commands/index.js';

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

  cat: {
    usage: 'cat path_to_file',
    descr: 'Read file',
    action: catFile,
  },
  add: {
    usage: 'add new_file_name',
    descr: 'Create empty file in current working directory',
    action: addFile,
  },
  rn: {
    usage: 'rn path_to_file new_filename',
    descr: 'Rename file',
    action: renameFile,
  },
  cp: {
    usage: 'cp path_to_file path_to_new_directory',
    descr: 'Copy file',
    action: copyFile,
  },
  mv: {
    usage: 'mv path_to_file path_to_new_directory',
    descr: 'Move file',
    action: moveFile,
  },
  rm: {
    usage: 'rm path_to_file',
    descr: 'Delete file',
    action: deleteFile,
  },

  os: {
    usage: 'os --[param]',
    descr: 'Operating system info',
    action: getOSinfo,
  },

  hash: {
    usage: 'hash path_to_file',
    descr: 'Calculate hash for file',
    action: calcHash,
  },

  '.exit': {
    usage: '.exit',
    descr: '',
    action: () => process.exit(),
  }
}));

export { commands as FMcommands };
