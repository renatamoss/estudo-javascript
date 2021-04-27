'use strict'

var json = '{"nome" : "Renata" , "profissão" : "programadora" , "nacionalidade" : "brasileira"}';

console.log(json);
console.log(typeof json);

//transformando JSON em objeto
var obj = JSON.parse(json);
console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj["profissão"]);

//transformando objeto em JSON
var jsonTransform = JSON.stringify(obj);
console.log(jsonTransform);
