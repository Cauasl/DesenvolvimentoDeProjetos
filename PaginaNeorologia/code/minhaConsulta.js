
import { AcessarAPI, MeuBiscoito } from './modulo.js';

const AcharID = (arry=[], pessoaID) => {
   for(var i = 0; i < arry.length; i++) {
      if(arry[i].idUser == pessoaID) {
         return arry[i];
      }else if(i == arry.length - 1) {
         console.error('Não encontrado!');
         return false;
      }
   }
}

if(document.cookie.length > 0) {
   AcessarAPI('GET').then(function(dados) {
      //MeuID=1 -> 6
      const resBiscoito = MeuBiscoito().charAt(6); //Vai pegar o cookie
      const idAchado = AcharID(dados.record, resBiscoito); //Vai usar o resultado do cookie e utilizar para achar o usuario com o mesmo id

      if(idAchado != false) {
         console.log(idAchado); //Vai exibir o resultado no console

         MostrarMinhaConsulta(idAchado.nome, idAchado.email, idAchado.data, idAchado.hora, idAchado.tem, idAchado.OP);
      }
   })
}


function MostrarMinhaConsulta(nome, email, dia, CHora, CTpcom, CTP) {
   const caixaBase = document.getElementById('conteiner-consulta');
   caixaBase.innerHTML = ''; //Limpar caixa base
   
   const caixaPrincipal = document.createElement('div');
   caixaPrincipal.setAttribute('id', 'conteiner-vizualizacaoDaConsulta');
   caixaBase.appendChild(caixaPrincipal);


   const caixa1 = document.createElement('div');
   caixa1.setAttribute('class', 'vizualizacaoDaConsulta');
   caixaPrincipal.appendChild(caixa1);
   caixa1.innerHTML += '<p>Nome:</p>';
   caixa1.innerHTML += `<p id="nomePaciente">${nome}</p>`;
  

   const caixa2 = document.createElement('div');
   caixa2.setAttribute('class', 'vizualizacaoDaConsulta');
   caixaPrincipal.appendChild(caixa2);
   caixa2.innerHTML += '<p>Email:</p>';
   caixa2.innerHTML += `<p id="emailPaciente">${email}</p>`;

   const caixa3 = document.createElement('div');
   caixa3.setAttribute('class', 'vizualizacaoDaConsulta');
   caixaPrincipal.appendChild(caixa3);
   caixa3.innerHTML += `<p>Dia: <span>${dia}</span></p>`;
   caixa3.innerHTML += `<p>Hora: <span>${CHora}</span></p>`;
   caixa3.innerHTML += `<p>Tem problemas com: <span>${CTpcom}</span></p>`;
   caixa3.innerHTML += `<p>Tipo da consulta: <span>${CTP}</span></p>`;

   const caixaBotoes = document.createElement('div');
   caixaBotoes.setAttribute('id', 'conteiner-reagenda');
   caixaPrincipal.appendChild(caixaBotoes);
   caixaBotoes.innerHTML += '<button>Apagar consulta</button>';
   caixaBotoes.innerHTML += '<button>Reagendar</button>';

}