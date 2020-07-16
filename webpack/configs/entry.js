'use strict';

/**
 * Module dependencies.
 */
const glob = require('glob');
const { existsSync } = require('fs');
const { join, parse } = require('path');

/**
 * Module.exports
 */
module.exports = entryLoader;

function replaceEntries(dir) {
  return dir.replace(/\app/, '');
}

function entryLoader(entriesDir, pattern, options = {}) {
  // exist check
  if (!existsSync(entriesDir)) {
    throw new Error(`'${entriesDir}' does not exist`);
  }

  // assign glob options
  const opts = Object.assign({}, { cwd: entriesDir }, options);

  // convert glob pattern
  const globPattern = Array.isArray(pattern) ? `{${pattern.join()}}` : pattern;

  // return entry list
  return glob.sync(globPattern, opts).reduce((entries, file) => {
    const { dir, name } = parse(file);
    entries[join(replaceEntries(dir), name)] = join(entriesDir, file);
    return entries;
  }, {});
}