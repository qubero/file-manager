import { EOL } from 'os';

export const FMmessage = {
  _show: (str) => console.log(str),
  showCwd: () => FMmessage._show(`You are currently in ${process.cwd()}`),
  showGreeting: (name) => FMmessage._show(`Welcome to the File Manager, ${name}!${EOL}`),
  showValediction: (name) => FMmessage._show(`Thank you for using File Manager, ${name}!${EOL}`),
};

export const FMerror = {
  unknown: new Error('Invalid input'),
  fail: new Error('Operation failed'),
};
