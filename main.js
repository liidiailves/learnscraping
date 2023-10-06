function write(text){
    process.stdout.write(text);
}
write('\x1b[0;30mHello world\n'); // Set style to bold, black foreground, pole näha
write('\x1b[0;31mHello world\n'); 
write('\x1b[0;32mHello world\n'); 
write('\x1b[0;33mHello world\n'); 
write('\x1b[0;34mHello world\n'); 
write('\x1b[0;35mHello world\n'); 
write('\x1b[0;36mHello world\n'); 
write('\x1b[0;37mHello world\n'); 
write('\x1B[1mHello world\n'); 
write('\x1B[0m'); //reset
write('\x1b[0;40mHello world\n'); 
write('\x1b[0;41mHello world\n'); 
write('\x1b[0;42mHello world\n'); 
write('\x1b[0;43mHello world\n'); 
write('\x1b[0;44mHello world\n'); 
write('\x1b[0;45mHello world\n'); 
write('\x1b[0;46mHello world\n'); 
write('\x1b[0;47mHello world\n'); 
write('\x1b[0;44mHello world\x1B[0;0m\n'); // see resetib rea lõpus värvid 
write('\x1b[0;41m');
write('Hello there!');
write('\x1B[0;0m');
write('\n');

for( let i = 0; i<255; i++){
    write(`\x1B[38;5;${i}m 1`)
};
for( let i = 0; i<255; i++){
    write(`\x1B[48;5;${i}m `)
};
for( let i = 0; i<255; i++){
    write(`\x1B[48;2;${i};${i};${i}m `)
}; // truecolors

write('Hello world');
setTimeout(() => {
    write('\x1B[5D');
    write('people');
}, 1000);

let date = new Date();
write(date.toLocaleTimeString());
setInterval(() => {
    write('\x1B[10D'); // kustutab tagasi 10 märki
    let date = new Date();
    write(date.toLocaleTimeString()); // asendab
}, 1000); // NB! võtab arvuti kella! Kui inglise oma, siis tekib probleem 10-12 tundidega!





