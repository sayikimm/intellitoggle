#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = process.cwd();

function writeIfMissing(filePath, content) {
    if (fs.existsSync(filePath)) {
        console.log(`${path.basename(filePath)} already exists — skipping`);
        return false;
    }
    fs.writeFileSync(filePath, content, { encoding: 'utf8' });
    console.log(`Created ${path.basename(filePath)}`);
    return true;
}

const tailwindConfig = `/** @type {import('tailwindcss').Config} */\nexport default {\n    content: [\n        "./components/**/*.{js,vue,ts}",\n        "./layouts/**/*.vue",\n        "./pages/**/*.vue",\n        "./app.vue",\n        "./plugins/**/*.{js,ts}",\n    ],\n    theme: {\n        extend: {},\n    },\n    plugins: [],\n}\n`;

const postcssConfig = `export default {\n    plugins: {\n        '@tailwindcss/postcss': {},\n        autoprefixer: {},\n    },\n}\n`;

const created = [];

if (writeIfMissing(path.join(root, 'tailwind.config.js'), tailwindConfig)) created.push('tailwind.config.js');
if (writeIfMissing(path.join(root, 'postcss.config.js'), postcssConfig)) created.push('postcss.config.js');

if (created.length === 0) {
    console.log('No files created. If you want to overwrite existing files, delete them first or run this script with a force option (not implemented).');
} else {
    console.log('Done.');
}

process.exit(0);
