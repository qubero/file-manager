import { homedir } from 'os';
import { createInterface} from 'readline';
import { handleInput } from './cli/handleInput.js';
import { FMmessage } from './logger/logger.js';

const storage = {
  name: '',
  cwd: '',
};

const initFileManager = () => {
  FMmessage.showGreeting(storage.name);
  FMmessage.showCwd(storage.initCwd);

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => handleInput(input))
    .on('SIGINT', () => rl.close())
    .on('close', () => process.exit());

  process.on('exit', () => FMmessage.showValediction(storage.name));
};

(() => {
  process.chdir(homedir());

  const userNameArg = process.argv.slice(2)[0];
  const [, name] = userNameArg.split('=');

  storage.name = name;
  storage.initCwd = process.cwd();

  initFileManager();
})();
