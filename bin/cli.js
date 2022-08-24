#!/usr/bin/env node

// import { program } from "commander";
const { program } = require("commander");
const { aardvark } = require("../aa");
const { promises } = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

// const pkg = JSON.parse(
//   promises.readFile(
//     new URL("../package.json", import.meta.url),
//     "utf-8"
//   )
// );

program
  .version("0.1.1")
  .option(
    "-c, --config <path>",
    "Path to the config file (default: pseudo.config.js)",
    "pseudo.config.js"
  )
  .option("-a, --aardvark");
program.parse();

let config = {};
try {
  config = import(pathToFileURL(path.resolve(program.opts().config))).default;
} catch (err) {
  if (err.code === "MODULE_NOT_FOUND") {
    console.log(
      "  [error] ".red + "Config file does not exist: " + program.opts().config
    );
  } else {
    throw err;
  }
}

if (program.opts().aardvark) console.log(aardvark);
else console.log("Hi");
