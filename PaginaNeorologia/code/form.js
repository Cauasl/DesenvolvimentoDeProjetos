import { AcessarAPI } from './modulo.js';

function EvitarEnvio(evento) {
   const nomeP = document.getElementById('Nome').value;
   const emailP = document.getElementById('Email').value;
   const pacienteTem = document.querySelector('[name="selecao"]:checked');
   const consulta = document.querySelector('[name="Consulta"]:checked');
   const diaConsulta = document.getElementById('dataDaConsulta').value;
   const horaConsulta = document.getElementById('horarios').value;

   AcessarAPI('PUT', true, {
      nome: nomeP,
      email: emailP,
      hora: horaConsulta,
      tem: pacienteTem.id,
      OP: consulta.id,
      data: diaConsulta
   });
   evento.preventDefault();
}
(function() {
   document.getElementById('Formulario').addEventListener('submit', EvitarEnvio);
})()