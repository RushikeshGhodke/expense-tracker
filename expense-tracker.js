import { Command } from "commander";
import fs from "fs";
import path from 'path';

const program = new Command();

program
  .option('-n, --name <string>')
  .option('-a, --age <number>')

program.parse();

const options = program.opts();
console.log(options.name);

const dataFilePath = path.join(import.meta.dirname, 'data.json');

console.log(dataFilePath);

if (!fs.existsSync(dataFilePath)) {
  console.error("Data file doesn't exists.");
}

console.log(fs.readFileSync(dataFilePath, 'utf8'));

