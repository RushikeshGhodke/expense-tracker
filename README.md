# Expense Tracker CLI

A simple command-line expense tracker application to manage your personal finances. The application allows users to add, delete, view, and summarize their expenses with an intuitive CLI interface.

**Project URL:** [https://roadmap.sh/projects/expense-tracker](https://roadmap.sh/projects/expense-tracker)

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Examples](#examples)
- [Data Storage](#data-storage)
- [Project Structure](#project-structure)
- [Technical Details](#technical-details)
- [License](#license)

## Features

- 💰 Add expenses with description and amount
- 📋 View all expenses in a table format
- 🗑️ Delete expenses by ID
- 📊 View expense summaries (total and monthly)
- 💾 Persistent data storage in JSON format
- ⚡ Fast CLI-based interface
- 🛡️ Input validation and error handling
- 📅 Automatic date tracking

## Requirements

The application meets the following requirements from [roadmap.sh](https://roadmap.sh/projects/expense-tracker):

- ✅ Command-line interface for expense management
- ✅ Add expenses with description and amount
- ✅ Delete expenses by ID
- ✅ View all expenses in organized format
- ✅ Generate expense summaries
- ✅ Monthly expense summaries for current year
- ✅ Persistent data storage
- ✅ Input validation and error handling

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rushikeshghodke/expense-tracker.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd expense-tracker
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

The application uses the following command structure:

```bash
node expense-tracker.js <command> [options]
```

### Available Commands

- `add` - Add a new expense
- `list` - View all expenses
- `delete` - Delete an expense by ID
- `summary` - View expense summaries

## Commands

### Add Expense
Add a new expense with description and amount:

```bash
node expense-tracker.js add --description "Lunch" --amount 20
```

**Options:**
- `--description <string>` - Description of the expense (required)
- `--amount <number>` - Amount of the expense (required, must be > 0)

### List Expenses
View all expenses in a table format:

```bash
node expense-tracker.js list
```

### Delete Expense
Delete an expense by its ID:

```bash
node expense-tracker.js delete --id 2
```

**Options:**
- `--id <number>` - ID of the expense to delete (required)

### Summary
View expense summaries:

```bash
# Total expenses
node expense-tracker.js summary

# Monthly summary (1-12)
node expense-tracker.js summary --month 8
```

**Options:**
- `--month <number>` - Month number (1-12) for monthly summary (optional)

## Examples

### Complete Workflow Example:

```bash
# Add some expenses
$ node expense-tracker.js add --description "Lunch" --amount 20
┌─────────┬─────┬────────────────┬───────────────┬────────┐
│ (index) │ id  │  description   │     date      │ amount │
├─────────┼─────┼────────────────┼───────────────┼────────┤
│    0    │  1  │    'Lunch'     │ '2024-08-06'  │   20   │
└─────────┴─────┴────────────────┴───────────────┴────────┘

$ node expense-tracker.js add --description "Dinner" --amount 10
┌─────────┬─────┬────────────────┬───────────────┬────────┐
│ (index) │ id  │  description   │     date      │ amount │
├─────────┼─────┼────────────────┼───────────────┼────────┤
│    0    │  1  │    'Lunch'     │ '2024-08-06'  │   20   │
│    1    │  2  │    'Dinner'    │ '2024-08-06'  │   10   │
└─────────┴─────┴────────────────┴───────────────┴────────┘

# View all expenses
$ node expense-tracker.js list
┌─────────┬─────┬────────────────┬───────────────┬────────┐
│ (index) │ id  │  description   │     date      │ amount │
├─────────┼─────┼────────────────┼───────────────┼────────┤
│    0    │  1  │    'Lunch'     │ '2024-08-06'  │   20   │
│    1    │  2  │    'Dinner'    │ '2024-08-06'  │   10   │
└─────────┴─────┴────────────────┴───────────────┴────────┘

# View summary
$ node expense-tracker.js summary
Total expenses: 30

# Delete an expense
$ node expense-tracker.js delete --id 2
Entry with id 2 has been removed.

# View updated summary
$ node expense-tracker.js summary
Total expenses: 20

# View monthly summary
$ node expense-tracker.js summary --month 8
Total expenses for month 8: 20
```

### Error Handling Examples:

```bash
# Invalid amount
$ node expense-tracker.js add --description "Coffee" --amount 0
Amount should be greater than 0.

# Delete non-existent expense
$ node expense-tracker.js delete --id 999
No entry found with id 999

# List when no data file exists
$ node expense-tracker.js list
Data file doesn't exists.
```

## Data Storage

The application stores expense data in a local JSON file (`data.json`) with the following structure:

```json
[
  {
    "id": 1,
    "description": "Lunch",
    "amount": 20,
    "date": "2024-08-06"
  },
  {
    "id": 2,
    "description": "Dinner",
    "amount": 10,
    "date": "2024-08-06"
  }
]
```

### Data Fields:
- **id**: Unique identifier (auto-generated)
- **description**: Expense description
- **amount**: Expense amount (positive integer)
- **date**: Date in YYYY-MM-DD format (auto-generated)

## Project Structure

```
expense-tracker/
├── expense-tracker.js    # Main CLI application
├── package.json         # Project metadata and dependencies
├── data.json           # Expense data storage (auto-generated)
├── README.md           # Project documentation
├── LICENSE             # License information
└── .gitignore          # Git ignore rules
```

## Technical Details

### Technologies Used
- **Language:** JavaScript (Node.js)
- **CLI Framework:** Commander.js
- **Data Storage:** JSON file system
- **Module System:** ES Modules

### Dependencies
```json
{
  "commander": "^11.0.0"
}
```

### Key Features Implementation

1. **Command Parsing:** Uses Commander.js for robust CLI argument parsing
2. **Data Persistence:** JSON file storage with automatic file creation
3. **ID Generation:** Auto-incrementing ID system
4. **Date Handling:** Automatic date assignment in ISO format
5. **Input Validation:** Amount validation and error handling
6. **Table Display:** Console.table for formatted output

### Core Functions

- **Add Expense:** Validates input, generates ID, saves to JSON
- **List Expenses:** Reads and displays all expenses in table format
- **Delete Expense:** Filters out expense by ID and updates file
- **Summary:** Calculates totals with optional month filtering

## Development

### Local Development
1. Make changes to `expense-tracker.js`
2. Test with various commands: `node expense-tracker.js <command>`
3. Verify data persistence in `data.json`
4. Test error scenarios and edge cases

### Testing Scenarios
```bash
# Test all basic operations
node expense-tracker.js add --description "Test" --amount 50
node expense-tracker.js list
node expense-tracker.js summary
node expense-tracker.js delete --id 1

# Test edge cases
node expense-tracker.js add --description "Zero" --amount 0
node expense-tracker.js delete --id 999
node expense-tracker.js summary --month 13
```

## Future Enhancements

Potential improvements for this project:
- [ ] **Update Functionality:** Modify existing expenses
- [ ] **Category System:** Categorize and filter expenses
- [ ] **Budget Tracking:** Set monthly budgets with alerts
- [ ] **Export Features:** CSV/PDF export capabilities
- [ ] **Search & Filter:** Advanced expense filtering
- [ ] **Recurring Expenses:** Support for recurring transactions
- [ ] **Multi-Currency:** Support for different currencies
- [ ] **Data Backup:** Cloud backup and sync features
- [ ] **Charts & Reports:** Visual expense analytics
- [ ] **Import Data:** Import from bank statements

## Educational Value

This project demonstrates:
- **CLI Development:** Building command-line interfaces with Commander.js
- **File System Operations:** Reading/writing JSON data
- **Data Management:** CRUD operations implementation
- **Input Validation:** User input sanitization and validation
- **Error Handling:** Graceful error management
- **Date Manipulation:** Working with dates in JavaScript
- **Modular Programming:** Clean code organization

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Acknowledgments

- **Project Source:** [roadmap.sh Expense Tracker Project](https://roadmap.sh/projects/expense-tracker)
- **CLI Framework:** [Commander.js](https://github.com/tj/commander.js)
- **Author:** [Rushikesh Ghodke]

---

**Note:** This project is part of the roadmap.sh backend development learning path. It demonstrates practical skills in CLI development, data persistence, and financial application logic.

## Quick Start

```bash
# Clone and run in 4 steps
git clone https://github.com/rushikeshghodke/expense-tracker.git
cd expense-tracker
npm install
node expense-tracker.js add --description "First expense" --amount 25
```

Start tracking your expenses efficiently! 💰📊
