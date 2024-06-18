const path = require('path')

const filePath = '/javaScript/node/nodeJsCourse/07-path/node/index.js'
const textFilePath = '/javaScript/node/nodeJsCourse/file.txt'
const relativePath = './node/movie.mov'
const directoryPath = './node/subfolder'

console.log(path.isAbsolute(filePath)) //true
console.log(path.isAbsolute(textFilePath)) //true
console.log(path.isAbsolute(relativePath)) //false

console.log(path.basename(filePath)) //index.js
console.log(path.basename(directoryPath)) //subfolder

console.log(path.dirname(filePath)) // /javaScript/node/nodeJsCourse/07-path/node
console.log(path.dirname(directoryPath)) // ./node

console.log(path.resolve(relativePath)) // d:\javaScript\node\nodeJsCourse\07-path\node\movie.mov
console.log(path.resolve(directoryPath)) // d:\javaScript\node\nodeJsCourse\07-path\node\subfolder

console.log(path.extname(directoryPath)) // ''
console.log(path.extname(textFilePath)) // .txt

console.log(path.parse(filePath)) // {root: '/', dir: '/ javaScript/node/nodeJsCourse/07-path/node', base: 'index.js', ext: '.js', name: 'index'}

const parsePath = path.parse(filePath)
console.log(path.join(parsePath.dir, `renamed-${parsePath.name}.mjs`)) // \javaScript\node\nodeJsCourse\07-path\node\renamed-index.mjs
