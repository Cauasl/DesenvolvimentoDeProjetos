import { AcessarAPI, OpcaoDaLista } from './modulo.js';

AcessarAPI('GET')
   .then(function(dados) {
      console.log(dados);

      for(var i = 0; i < dados.record.length; i++) {
         OpcaoDaLista('ulLista', dados.record[i].nome, dados.record[i].hora, dados.record[i].email, dados.record[i].tem, dados.record[i].OP, dados.record[i].data);
      }
   })
   .catch(function(err) {
      console.log(err);
   });