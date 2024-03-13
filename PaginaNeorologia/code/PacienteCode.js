import { AcessarAPI, OpcaoDaLista } from './modulo.js';

const PegarHoraMinuto = (num) => {
   const hmDate = new Date();
   let hh = hmDate.getHours() + num;
   let mm = hmDate.getMinutes();
   if(hh > 23 || hh < 10) {
      hh = `0${num}`; 
   }
   if(mm < 10) {
      mm = `0${hmDate.getMinutes()}`
   }
   return String(hh) + ':' + String(mm);
}

AcessarAPI('GET')
   .then(function(dados) {
      console.log(dados);

      for(var i = 0; i < dados.record.length; i++) {
         OpcaoDaLista('ulLista', dados.record[i].nome, dados.record[i].hora, dados.record[i].email, dados.record[i].tem, dados.record[i].OP, dados.record[i].data);
      }
   })
   .catch(function(err) {
      console.log(err);
   })