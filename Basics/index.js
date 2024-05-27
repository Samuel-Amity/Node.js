import chalk from 'chalk';
import { add } from './math.js';

console.log(chalk.green('Hello, World!'));
console.log(chalk.blue(`2 + 3 = ${add(2, 3)}`));
