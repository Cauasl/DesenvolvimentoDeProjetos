import { AcessarAPI } from './modulo.js';

function EvitarEnvio(evento) {
   const nomeP = document.getElementById('Nome').value;
   const emailP = document.getElementById('Email').value;


   AcessarAPI('POST', true, {
      nome: nomeP,
      email: emailP
   });

   AcessarAPI('GET', false).then(function(dado) {
      console.log(dado);
   })
   evento.preventDefault();
}
document.getElementById('Formulario').addEventListener('submit', EvitarEnvio);