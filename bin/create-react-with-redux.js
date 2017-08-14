#!/usr/bin/env node
var program     = require('commander');
var shell       = require('shelljs');
var semver      = require('semver');
var packageJson = require('../package.json');

program
  .version(semver(packageJson.version))
  .arguments('<dir>')
  .usage('[options] <dir>')
  .action(function(dir) {
    // logic goes here
  })
  .parse(process.argv);