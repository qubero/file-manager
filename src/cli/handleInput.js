import { FMcommands } from './commands.js';
import { FMerror, FMmessage } from '../logger/logger.js';

export const handleInput = async (input) => {
  input = input.trim();

  let [command, ...args] = input.split(' ');

  //TODO: fix input args parse
  if (/["']/g.test(args)) {
    args = args
      .join(' ')
      .split(/["'] | ["']/)
      .map((arg) => arg.replace(/["']/g, ''))
  }

  try {
    if (!FMcommands.has(command)) throw FMerror.unknown;

    await FMcommands.get(command).action(args);
  } catch (err) {
    console.error(err.message);
  } finally {
    FMmessage.showCwd();
  }
};
