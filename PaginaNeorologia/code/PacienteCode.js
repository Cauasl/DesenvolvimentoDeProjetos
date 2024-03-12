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

AcessarAPI('GET', false)
   .then(function(dados) {
      console.log(dados);

      for(var i = 0; i < dados.record.length; i++) {
         OpcaoDaLista('ulLista', dados.record[i].nome, PegarHoraMinuto(i), dados.record[i].email)
      }
   })
   .catch(function(err) {
      console.log(err);
   })