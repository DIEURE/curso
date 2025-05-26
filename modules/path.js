const path = require('path')
//basename
//Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// nome do diretorio atual
console.log(path.dirname(__filename));

// nome do diretorio atual
console.log(path.extname(__filename));

// nome do diretorio atual
console.log(path.parse(__filename));

// nome do diretorio atual
console.log(path.join(__dirname,"teste","teste.html"));