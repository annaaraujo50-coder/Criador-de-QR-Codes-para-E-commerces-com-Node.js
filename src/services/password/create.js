import chalk from "chalk";
import handle from "./handle.js";

function createPassword() {
  console.log(chalk.green.bold("Senha criada!"));
  const password = handle();
  console.log(chalk.yellow(password));
}

export default createPassword;
