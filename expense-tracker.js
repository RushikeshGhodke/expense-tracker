import { Command } from "commander";
import fs from "fs";
import path from 'path';
import { json } from "stream/consumers";
import { fileURLToPath } from "url";

const program = new Command();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, 'data.json');

// expense-tracker list
program
  .command('list')
  .action(() => {
    if (!fs.existsSync(dataFilePath)) {
      console.error("Data file doesn't exists.");
      return;
    }

    const jsonData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'))
    console.table(jsonData);
  })

// expense-tracker add --description "Dinner" --amount 10
program
  .command('add')
  .option('--description <string>')
  .option('--amount <number>')
  .action((options) => {

    const jsonData = fs.readFileSync(dataFilePath) ? JSON.parse(fs.readFileSync(dataFilePath, 'utf8')) : [];

    // Generate next ID
    const nextId = jsonData.length > 0 ? jsonData[jsonData.length - 1].id + 1 : 1;

    // Format date as YYYY-MM-DD
    const formattedDate = new Date().toISOString().split("T")[0];

    const newExpense = {
      id: nextId,
      description: options.description,
      amount: parseInt(options.amount),
      date: formattedDate
    }

    jsonData.push(newExpense);
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2))
    console.table(jsonData);
  })

// expense-tracker summary
program
  .command('summary')
  .action(() => {
    const jsonData = fs.readFileSync(dataFilePath) ? JSON.parse(fs.readFileSync(dataFilePath, 'utf8')) : [];
    let totalPrice = 0;

    jsonData.forEach(entry => {
      totalPrice += entry.amount;
    });

    console.log(`Total expenses: ${totalPrice}`)
  })

// expense-tracker delete --id 2
program
  .command('delete')
  .option('--id <number>')
  .action((options) => {
    const jsonData = fs.readFileSync(dataFilePath) ? JSON.parse(fs.readFileSync(dataFilePath, 'utf8')) : [];

    const updatedData = jsonData.filter(entry => entry.id !== parseInt(options.id));

    if (jsonData.length === updatedData.length) {
      console.log(`No entry found with id ${options.id}`);
    } else {
      fs.writeFileSync(dataFilePath, JSON.stringify(updatedData, null, 2), 'utf8');
      console.log(`Entry with id ${options.id} has been removed.`);
    }
  })











program.parse();