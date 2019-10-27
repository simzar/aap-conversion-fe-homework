/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

function verifyHook() {
  const src = path.join(__dirname, './hooks/pre-commit');
  const dest = path.join(__dirname, '../.git/hooks/pre-commit');
  const destExists = fs.existsSync(dest);
  const srcBuffer = fs.readFileSync(src);

  if (!destExists) {
    console.log('Create pre-commit hook.');
    fs.writeFileSync(dest, srcBuffer);
    fs.chmodSync(dest, '755');
    return;
  }

  const destBuffer = fs.readFileSync(dest);

  if (!srcBuffer.equals(destBuffer)) {
    console.log('Update pre-commit hook.');
    fs.writeFileSync(dest, srcBuffer);
    fs.chmodSync(dest, '755');
  }
}

verifyHook();
