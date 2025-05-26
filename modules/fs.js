const fs = require('fs')
const path= require('path')

//criar pasta
/* fs.mkdir(path.join(__dirname, '/test'),(error) => {
    if (error){
        console.log('Erro', error)
    }
    console.log('Pasta criada com sucesso.');
}); */

/* fs.writeFile(
  path.join(__dirname,'/test','teste.txt'),
  'hello node',
  (error) => {
    if (error){
       return console.log('Erro', error);
    }
        console.log('ARquivo criada com sucesso.');
});
 */



// ler arquivo
fs.readFile(
    path.join(__dirname, "/test","test.txt"),
    "utf8",
    (error,data) => {
        if(error){
          return console.log("Erro:", error);
    }
    console.log(data);
})