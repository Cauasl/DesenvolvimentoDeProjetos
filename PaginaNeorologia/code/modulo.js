export async function AcessarAPI(methodHTTP, mostrarConsole=false, obj={}) {
   const CHAVE_MESTRA = '$2a$10$wKuTiJNymyadlf01.ZE9QObiWCg/.952W5qET2eiu3y1CipwZ0Qqu';
   const CHAVE_PACIENTES = '$2a$10$xqhaeYD4.uA5krjdoDhnUOZKOMFf9KlddHYUpd.nWdwJ0Ceb9USO2';
   const BIN = '65efaee31f5677401f3c2a83';
   const urlGET = 'https://api.jsonbin.io/v3/b/'+ BIN + '/latest';
   const urlPUT = 'https://api.jsonbin.io/v3/b/' + BIN;

   let dadoUser;
   switch(methodHTTP) {

      //Pegar os dados que existem
      case 'GET':
         dadoUser = await fetch(urlGET, {
            method: methodHTTP,
            headers: {
               "Content-Type": "application/json",
               "X-Master-Key": CHAVE_MESTRA
            }
         });
         return dadoUser.json();
      break;

      //Mudar todo os dados existentes
      case 'PUT': 
         AcessarAPI('GET', true).then(async function(resposta) {
            console.log(resposta.record);
            resposta.record.push(obj);
            
               dadoUser = await fetch(urlPUT, {
               method: methodHTTP,
               headers: {
                  "Content-Type": "application/json",
                  "X-Master-Key": CHAVE_MESTRA,
                  "X-Access-Key": CHAVE_PACIENTES
               },
               body: JSON.stringify(resposta.record)
            })
         })
      break;

      //Caso não tenha a operação
      default:
         console.error('Método não supotado');
      break;
   }

   if(mostrarConsole) {
      console.log(dadoUser);
   }
}




export function OpcaoDaLista(idDaLista, Nome, hora, Email, tem, op, data) {
   const li = document.createElement('li');
   const NomePaciente = document.createElement('span');
   const Horario = document.createElement('span');

   const lista = document.getElementById(idDaLista);

   lista.appendChild(li);
   li.addEventListener('click', function() {
      window.location.href = './adm.html#espaco-conteiner-dados';

      document.getElementById('NomeDoPaciente').innerText = Nome;
      document.getElementById('EmailDoPaciente').innerText = Email;
      document.getElementById('horaConsulta').innerText = hora;
      document.getElementById('tem').innerText = tem;
      document.getElementById('op').innerText = op;
      document.getElementById('dia').innerText = data;
   });
   li.appendChild(NomePaciente);
      NomePaciente.innerText = Nome;
   li.appendChild(Horario);
      Horario.innerText = hora;
}
