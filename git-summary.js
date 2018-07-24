#!/usr/bin/env node

const args = process.argv.slice(2);
const options = args[0];
const path = args[1];
const currentPath = process.cwd(); // if no path is passed, will default to the working directory where command was executed
const shell = require('shelljs');

const run = (options = '',  path = currentPath) => {
  shell.exec(`./git-summary.sh ${options} ${path}`);
}

run(options, path);
