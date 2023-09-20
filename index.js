const express = require('express');
const app = express();

            //no se indica el directors ya que el archivo de rutas comienza a partir de que se acaba el nombre de 
            //dominio, por eso solo se pone el slash ya que se sabe que estamos en url.dominio/directors
app.post('/results/:n1/:n2', (req,res,next) => { //post no recibe parametros pero vamos a hacerlo para propósitos del ejercicio
    //multiplica´
    
    let n1 = Math.floor(req.params.n1);
    let n2 = Math.floor(req.params.n2);
    let n3 = n1 * n2;
    let formattedResult = n1.toString() +'*'+ n2.toString()+'='+n3.toString();
    res.send(formattedResult);
    
});

app.get('/´', (req,res,next) => {
    res.send('Se deben de introducir números.');
});

app.get('/results/:n1/:n2', (req,res,next) => {
    //sumar
        
    let n1 = Math.floor(req.params.n1);
    let n2 = Math.floor(req.params.n2);
    let n3 = n1 + n2;
    let formattedResult = n1.toString() +'+'+ n2.toString()+'='+n3.toString();
    res.send(formattedResult);

});

app.put('/results/:n1/:n2', (req,res,next) => {
    //divide    
    let n1 = Math.floor(req.params.n1);
    let n2 = Math.floor(req.params.n2);
    let n3 = n1 / n2;
    let formattedResult = n1.toString() +'/'+ n2.toString()+'='+n3.toString();
    res.send(formattedResult);
});

app.patch('/results/:n1/:n2', (req,res,next) => {
    //potencia    
    let n1 = Math.floor(req.params.n1);
    let n2 = Math.floor(req.params.n2);
    let n3 = n1 ** n2;
    let formattedResult = n1.toString() +'**'+ n2.toString()+'='+n3.toString();
    res.send(formattedResult);
});

app.delete('/results/:n1/:n2', (req,res,next) => {
    //restar
    let n1 = Math.floor(req.params.n1);
    let n2 = Math.floor(req.params.n2);
    let n3 = n1 - n2;
    let formattedResult = n1.toString() +'-'+ n2.toString()+'='+n3.toString();
    res.send(formattedResult);
});

app.listen(4444);
