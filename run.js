//projek gabut
import readline from "readline";
import { exec } from "child_process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "andrax@console:~$  "
});
console.clear();
console.log("[ INFO ] Interactive Console Is Ready !!");
console.log("-> Made By AndraxC2")
console.log(`-> Type : "exit" to out from this console`); 
rl.prompt();

rl.on("line", (line) => {
  const command = line.trim();
  if (command.toLowerCase() === "exit") {
    console.log("Keluar...");
    process.exit(0);
  }

  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`[ ERROR ]: ${err.message}`);
    }
    if (stdout) {
      console.log(stdout.trim());
    }
    if (stderr) {
      console.error(stderr.trim());
    }
    rl.prompt();
  });
}).on("close", () => {
  console.log("[ INFO ] Console ditutup.");
  process.exit(0);
});

