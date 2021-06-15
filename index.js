const jstt = require('json-schema-to-typescript');
const fs = require('fs');

// compile from file
fs.mkdir('./output', {}, () => { /** Silently fail if exists */ });
const files = fs.readdirSync('./input');

files.forEach(async (file) => {
    const ts = await jstt.compileFromFile(`./input/${file}`, { unknownAny: true })
    fs.writeFileSync(`./output/${file}.ts`, ts);
});