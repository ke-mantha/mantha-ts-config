var fs = require('fs');

fs.copyFileSync('./tsconfig.src.json', process.env.INIT_CWD + '/src/tsconfig.json')
fs.copyFileSync('./tsconfig.root.json', process.env.INIT_CWD + '/tsconfig.json')
fs.copyFileSync('./tsconfig.module.json', process.env.INIT_CWD)