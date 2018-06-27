const fs = require('fs');
const os = require('os');
const basePackage = require('./package.json');
const platformPackage = Object.assign({}, basePackage);

if (os.platform() === 'darwin') {
  platformPackage.name = 'google-closure-compiler-osx';
  platformPackage.os = ['darwin'];
} else {
  platformPackage.name = 'google-closure-compiler-linux';
  platformPackage.os = ['linux'];
}
delete platformPackage.devDependencies;
delete platformPackage.private;

fs.writeFileSync('package.json', JSON.stringify(platformPackage, null, 2) + '\n');
