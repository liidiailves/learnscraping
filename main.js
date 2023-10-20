import chalk from 'chalk';
import boxen from 'boxen';
import inquirer from 'inquirer';
import yargs from 'yargs';
import { hideBin} from 'yargs/helpers';

function write(text){
    process.stdout.write(text);
}
// write('\x1b[0;30mHello world\n'); // Set style to bold, black foreground, pole näha
// write('\x1b[0;31mHello world\n'); 
// write('\x1b[0;32mHello world\n'); 
// write('\x1b[0;33mHello world\n'); 
// write('\x1b[0;34mHello world\n'); 
// write('\x1b[0;35mHello world\n'); 
// write('\x1b[0;36mHello world\n'); 
// write('\x1b[0;37mHello world\n'); 
// write('\x1B[1mHello world\n'); 
// write('\x1B[0m'); //reset
// write('\x1b[0;40mHello world\n'); 
// write('\x1b[0;41mHello world\n'); 
// write('\x1b[0;42mHello world\n'); 
// write('\x1b[0;43mHello world\n'); 
// write('\x1b[0;44mHello world\n'); 
// write('\x1b[0;45mHello world\n'); 
// write('\x1b[0;46mHello world\n'); 
// write('\x1b[0;47mHello world\n'); 
// write('\x1b[0;44mHello world\x1B[0;0m\n'); // see resetib rea lõpus värvid 
// write('\x1b[0;41m');
// write('Hello there!');
// write('\x1B[0;0m');
// write('\n');

// for( let i = 0; i<255; i++){
//     write(`\x1B[38;5;${i}m 1`)
// };
// for( let i = 0; i<255; i++){
//     write(`\x1B[48;5;${i}m `)
// };
// for( let i = 0; i<255; i++){
//     write(`\x1B[48;2;${i};${i};${i}m `)
// }; // truecolors

// write('Hello world');
// setTimeout(() => {
//     write('\x1B[5D');
//     write('people');
// }, 1000);

// let date = new Date();
// write(date.toLocaleTimeString());
// setInterval(() => {
//     write('\x1B[10D'); // kustutab tagasi 10 märki
//     let date = new Date();
//     write(date.toLocaleTimeString()); // asendab
// }, 1000); // NB! võtab arvuti kella! Kui inglise oma, siis tekib probleem 10-12 tundidega!

for(let i = 0; i<255; i++){
    // funktsioon funktsiooni sees
    write(chalk.bgRgb(i, i, i)(' '));
}
write('\n');
write(boxen(chalk.reset.italic('Hello text'), {
    margin: 3,
    padding: 3,
    title: 'title',
    titleAlignment: 'center',
    borderColor: 'red',
    borderStyle: 'round'
}));

inquirer
  .prompt([
    {type: 'input', message: '"Whats your name?', name: 'name'},
    {type: 'number', message: 'Whats your age?', name: 'age'},
    {type: 'list', message:'Whats your gender?', name: 'gender', choices: ['male', 'female']},
    {
        type: 'checkbox',
        message: 'Favourite food?',
        name: 'foods',
        choices: [
            'pizza',
            'burger',
            {checked: true, value:'stake'}
        ]
    },
    {
        type: 'editor', name: 'haiku', message: 'Write a haiku!'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  yargs(hideBin(process.argv))
  .command('serve [port]', 'start the server', (yargs) => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000
      })
  }, (argv) => {
    if (argv.verbose) console.info(`start server on :${argv.port}`)
    serve(argv.port)
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .parse()






