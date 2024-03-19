import sLogin from "./Student.js";
import tLogin from "./Teacher.js";
import chalk from "chalk";
let teacher = new tLogin();
console.log(chalk.green(teacher.data));
let Student = new sLogin();
console.log(chalk.yellow(Student.data));
