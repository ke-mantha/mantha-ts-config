var fs = require('fs');

fs.copyFileSync('./tsconfig.new.json', proccess.cwd() + '/src/tsconfig.json')