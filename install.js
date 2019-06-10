var fs = require('fs');
var path = require('path');

function resolveInitCWD(...args) {
  return path.join(process.env.INIT_CWD, ...args);
}

function resolveDirName(...args) {
  return path.join(__dirname, ...args)
}

fs.copyFileSync(resolveDirName('tsconfig.src.json'), resolveInitCWD('src', 'tsconfig.json'));
fs.copyFileSync(resolveDirName('tsconfig.root.json'), resolveInitCWD('tsconfig.json'));
fs.copyFileSync(resolveDirName('tsconfig.module.json'), resolveInitCWD('tsconfig.module.json'));
