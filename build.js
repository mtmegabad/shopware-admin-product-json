import {minify} from 'terser';
import { readFileSync, writeFileSync } from 'fs';
import { text } from 'stream/consumers';

const sourceCode = readFileSync('source.js', 'utf-8');

const minified = await minify(sourceCode, {
    compress: {
        drop_console: false,
    },
    mangle: true,
});

const bookmarkletCode = `<a href="javascript:${encodeURIComponent(minified.code)}">Bookmarklet</a>`;
const readmeMD = `# Shopware Admin Product JSON Inspect Bookmarklet

This bookmarklet allows you to inspect the JSON data of a Shopware Admin product detail page.

## Usage

1. Copy the code into the a new Bookmark's URL field:

\`\`\`text
javascript:${encodeURIComponent(minified.code)}
\`\`\`

2. Navigate to a Shopware Admin product detail page.
3. Click the bookmarklet to inspect the product JSON data in your browser's console.

## Building

1. git clone this repository
2. npm install
3. npm run build

## Development

paste code from \`source.js\` into your browser console on a Shopware Admin product detail page and hit enter to test it directly.

## License

MIT
`;

writeFileSync('README.md', readmeMD);