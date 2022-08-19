#!/usr/bin/env node

// import { program } from "commander";
const { program } = require("commander");
const { aardvark } = require("../aa");

program.version("0.1.0").option("-a, --aardvark");
program.parse();

if (program.opts().aardvark) console.log(aardvark);
else console.log("Hi");
