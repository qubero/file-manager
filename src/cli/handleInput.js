import { FMcommands } from './commands.js';
import { FMerror, FMmessage } from '../logger/logger.js';

export const handleInput = (input) => {
  const [command, ...args] = input.split(' ');

  try {
    if (!FMcommands.has(command)) throw FMerror.unknown;

    FMcommands.get(command).action(args);
    FMmessage.showCwd();
  } catch (err) {
    console.error(err.message);
  }
};
