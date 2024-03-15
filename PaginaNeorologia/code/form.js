import { AcessarAPI, MeuBiscoito } from './modulo.js';

function EvitarEnvio(evento) {
   const nomeP = document.getElementById('Nome').value;
   const emailP = document.getElementById('Email').value;
   const pacienteTem = document.querySelector('[name="selecao"]:checked');
   const consulta = document.querySelector('[name="Consulta"]:checked');
   const diaConsulta = document.getElementById('dataDaConsulta').value;
   const horaConsulta = document.getElementById('horarios').value;

   if(document.cookie.length > 0 ) {
      const biscoitoNome = "MeuID";
      document.cookie = biscoitoNome + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   }

   AcessarAPI('GET').then(function(dados) {
      const user = MeuBiscoito('SET', 'MeuID', dados.record.length + 1);

      AcessarAPI('PUT', true, {
         nome: nomeP,
         email: emailP,
         hora: horaConsulta,
         tem: pacienteTem.id,
         OP: consulta.id,
         data: diaConsulta,
         idUser: user
      });
   });

   evento.preventDefault();
}
(function() {
   document.getElementById('Formulario').addEventListener('submit', EvitarEnvio);

})()