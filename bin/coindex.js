#!/usr/bin/env node
const program = require("commander");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command("key", "Manage API key -- https://nomics.com")
  .parse(process.argv);

//without commander
// console.log(process.argv);
