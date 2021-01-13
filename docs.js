#!/usr/bin/env node

'use strict';

const fs = require('fs');

fs.copyFile('dist/imghover.min.js', 'docs/imghover.min.js', (err) => {
    if (err) throw err;
    console.log('Successfully copied script from dist to docs.');
});
