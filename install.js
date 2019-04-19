var fs = require('fs');

fs.copyFileSync('./tsconfig.new.json', process.cwd() + '/src/tsconfig.json')