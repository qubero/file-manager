import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Writable } from 'stream';

export const getEnvPaths = (importMetaUrl) => {
  const __filename = fileURLToPath(importMetaUrl);
  const __dirname = dirname(__filename);

  return { __dirname, __filename };
};

export const createCustomWriteStream = () => {
  return new Writable({
    decodeStrings: false,
    write(chunk, _, cb) {
      console.log(chunk);
      cb();
    },
  });
};
