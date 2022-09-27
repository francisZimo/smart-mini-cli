const { program } = require('commander');
// program
//   .requiredOption('-c, --cheese <type>', 'pizza must have cheese');

// program.parse();
// program
//   .command('start <service>', 'start named service')
//   .command('stop [service]', 'stop named service, or all if no name supplied');

// program
//   .command('clone <source> [destination]')
//   .description('clone a repository into a newly created directory')
//   .action((source, destination) => {
//     console.log('clone command called');
//   });

// program
//   .version('0.1.0')
//   .argument('<username>', 'user to login')
//   .argument('[password]', 'password for user, if required', 'no password given')
//   .action((username, password) => {
//     console.log('username:', username);
//     console.log('password:', password);
//   });


//   program
//   .argument('<name>')
//   .option('-t, --title <honorific>', 'title to use before name')
//   .option('-d, --debug', 'display some debugging')
//   .action((name, options, command) => {
//     if (options.debug) {
//       console.error('Called %s with options %o', command.name(), options);
//     }
//     const title = options.title ? `${options.title} ` : '';
//     console.log(`Thank-you ${title}${name}`);
//   });

// program
//   .option('-t, --trace', 'display trace statements for commands')
//   .hook('preAction', (thisCommand, actionCommand) => {
//     if (thisCommand.opts().trace) {
//       console.log(`About to call action handler for subcommand: ${actionCommand.name()}`);
//       console.log('arguments: %O', actionCommand.args);
//       console.log('options: %o', actionCommand.opts());
//     }
//   });

program
  .version('0.1.0')
  .command('rmdir')
  .argument('<dirs...>')
  .action(function (dirs) {
    dirs.forEach((dir) => {
        // exec(`rmdir ${dir}`)
        process.stdin
      console.log('rmdir %s', dir);
    });
  });

  
function errorColor(str) {
    // 添加 ANSI 转义字符，以将文本输出为红色
    return `\x1b[31m${str}\x1b[0m`;
  }
  
  program
    .configureOutput({
      // 此处使输出变得容易区分
      writeOut: (str) => process.stdout.write(`[OUT] ${str}`),
      writeErr: (str) => process.stdout.write(`[ERR] ${str}`),
      // 将错误高亮显示
      outputError: (str, write) => write(errorColor(str))
    });
  
program.parse()