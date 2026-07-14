const fs = require('fs');
const path = require('path');

const dirsToScan = ['app', 'components', 'config', 'lib', 'public', 'types'];
const extensions = ['.ts', '.tsx', '.json', '.js', '.css', '.md'];

function walkSync(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walkSync(filepath, callback);
    } else if (stats.isFile() && extensions.includes(path.extname(filepath))) {
      callback(filepath);
    }
  }
}

let modifiedFiles = 0;

dirsToScan.forEach((dir) => {
  const fullPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(fullPath)) {
    walkSync(fullPath, (filepath) => {
      let content = fs.readFileSync(filepath, 'utf8');
      const original = content;

      // Replacements
      content = content.replace(/Parsu Tech/g, 'Parsuram Naik');
      content = content.replace(/PARSU TECH/g, 'PARSURAM NAIK');
      content = content.replace(/ParsuTech/g, 'ParsuramNaik');
      content = content.replace(/parsutech/g, 'parsuramnaik');
      
      // Some special cases where someone might have used "Parsu tech" or something
      content = content.replace(/Parsu tech/g, 'Parsuram Naik');
      
      if (content !== original) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Modified: ${filepath}`);
        modifiedFiles++;
      }
    });
  }
});

console.log(`Total files modified: ${modifiedFiles}`);
