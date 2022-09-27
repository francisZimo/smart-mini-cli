#!/usr/bin/env node

// const program=require('commander')
// program.version('0.0.1')
// program.option('--first','my debug','123')
// program.parse(process.argv)
// // console.log(program.parse(process.argv),'==argv')
// console.log(program.first,'==debug')

const { program } = require('commander');
program.version('0.0.1')
program
  .option('--first')
  .option('-s, --separator <char>');


program.parse();

const options = program.opts();
console.log(options,'==options')
// const limit = options.first ? 1 : undefined;
// console.log(program.args)
// console.log(program.args[0].split(options.separator, limit));