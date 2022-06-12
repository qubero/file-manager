import { getOSinfo } from './os/index.js';
import { calcHash } from './hash/index.js';
import { listFiles, changeDirectory } from './nwd/index.js';
import { addFile, catFile, copyFile, moveFile, deleteFile, renameFile } from './bfo/index.js';
import { compress, decompress } from './cf/index.js';

export { getOSinfo, listFiles, changeDirectory, calcHash, addFile, catFile, copyFile, moveFile, deleteFile, renameFile, compress, decompress };
