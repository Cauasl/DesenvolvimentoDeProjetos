export async function AcessarAPI(methodHTTP, mostrarConsole, obj={}) {
   const CHAVE_MESTRA = '$2a$10$wKuTiJNymyadlf01.ZE9QObiWCg/.952W5qET2eiu3y1CipwZ0Qqu';
   const BIN = '65efaee31f5677401f3c2a83';
   const urlGET = 'https://api.jsonbin.io/v3/b/'+ BIN + '/latest';
   const urlPOST = 'https://api.jsonbin.io/v3/b/' + BIN;
   //https://api.jsonbin.io/v3/b/65ef9108dc74654018b18c66

   if(methodHTTP == 'GET') {
      const dadoUser = await fetch(urlGET, {
         method: methodHTTP,
         headers: {
            "Content-Type": "application/json",
            "X-Master-Key": CHAVE_MESTRA
         }
      });
   
      if(mostrarConsole) {
         console.log(dadoUser);
      }
      return dadoUser.json();
   }else if(methodHTTP == 'POST') {
      const dadoUser = await fetch(urlPOST, {
         method: methodHTTP,
         headers: {
            "Content-Type": "application/json",
            "X-Master-Key": CHAVE_MESTRA
         },
         body: JSON.stringify(obj)
      })

      if(mostrarConsole) {
         console.log(dadoUser);
      }
   }else {
      console.error('Método não supotado');
   }
}

export function OpcaoDaLista(idDaLista, Nome, hora, Email) {
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
   });
   li.appendChild(NomePaciente);
      NomePaciente.innerText = Nome;
   li.appendChild(Horario);
      Horario.innerText = hora;
}
