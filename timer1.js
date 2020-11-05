const args = process.argv.splice(2);
// console.log("ARGS: " + args);
let x = 0;
let time = 0;
for (let char of args) {
  // console.log(char);
  setTimeout(() => {
    char = Number(args[x]);
    x++;
    // console.log(char, typeof char);
    // console.log(Number, typeof Number);
    // console.log(char >= 0, char);
    if (char >= 0 && !isNaN(char)) {
      process.stdout.write('BEEP'); // Replace this with <process.stdout.write('\x07')>;
    }
  }, time + (char * 1000))

}

//test for case
