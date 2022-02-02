// require modules
const fs = require('fs');
const archiver = require('archiver');
const args = require('node-args');
const folders = args.folders.split(',');

/**
 * accepts an array of folders, zips root js and json files
 * along with all js files in subdirectories, excluding node_modules
 * package script can accept a comma separated list of folders
 * @param {array} array of folders in code-examples to compress
 */
function archive(folders) {
  const directory = folders.pop();
  if (!directory) process.exit();
  const folder = `${__dirname}/../../code-examples/${directory}`;
  if (!fs.existsSync(folder)) throw Error(`no such folder ${folder}`);
  const output = fs.createWriteStream(`${folder}/${directory}.zip`);
  const archive = archiver('zip', { zlib: { level: 9 } });
  archive.pipe(output);
  archive.glob('.', { pattern: [ '**/*.js', '*.json' ], cwd: folder, skip: 'node_modules' });
  archive.finalize();
  output.on('end', () => archive(folders));
}

archive(folders);