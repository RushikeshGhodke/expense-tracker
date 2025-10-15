import { Command } from "commander";
import fs from "fs";
import path from 'path';

const program = new Command();

program
  .option('-n, --name <string>')
  .option('-a, --age <number>')
  .option('-l, --list')

program.parse();

const options = program.opts();

const dataFilePath = path.join(import.meta.dirname, 'data.json');

if (!fs.existsSync(dataFilePath)) {
  console.error("Data file doesn't exists.");
}

// expense-tracker list

if (options.list) {
  const jsonData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'))
  console.table(jsonData);
}
