const commands = new Map(Object.entries({
  '.exit': {
    usage: '.exit',
    descr: '',
    action: () => process.exit(),
  }
}));

export { commands as FMcommands };
