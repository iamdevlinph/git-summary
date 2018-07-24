#!/usr/bin/env node

const args = process.argv.slice(2);
const options = args[0]; // options
const dir = args[1]; // dir to check
const workingDirectory = process.cwd(); // if no dir is passed, will default to the working directory where command was executed

const path = require('path') // npm install path
const installationDir = path.dirname(require.resolve('git-summary/package.json')) // installation path of the module

const shell = require('shelljs');

const run = (options = '',  path = workingDirectory) => {
  if (!options) { // if there is no options. set options to be same as path
    options = path;
  }
  shell.exec(`${installationDir}/git-summary.sh ${options} ${path}`);
}

run(options, dir);
