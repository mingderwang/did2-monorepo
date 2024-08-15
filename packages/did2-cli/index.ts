#!/usr/bin/env bun

import { Command } from 'commander';
import { action2 } from 'did2-lib';

const program = new Command();

// Define the version of your CLI
program.version('1.0.0');

program
  .command('server <num1> <num2>')
  .description('Add two numbers')
  .action((num1: string, num2: string) => {
    const sum = parseFloat(num1) + parseFloat(num2);
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
  });

// Define a command
program
  .command('greet <name>')
  .description('Greet a person by their name')
  .option('-t, --times <number>', 'Number of times to greet', '1')
  .action((name, options) => {
    const times = parseInt(options.times)
    const greeting = action2(name, times)
    console.log(greeting)
  })


// Define a command to add two numbers
program
  .command('add <num1> <num2>')
  .description('Add two numbers')
  .action((num1: string, num2: string) => {
    const sum = parseFloat(num1) + parseFloat(num2);
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
  });

// Parse command-line arguments
program.parse(process.argv);

