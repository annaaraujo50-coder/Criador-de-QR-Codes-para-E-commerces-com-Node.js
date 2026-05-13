import prompt from 'prompt';

import mainPrompt from './prompt/prompt-main.js';
import createQRCode from './src/services/qr-code/creat.js';
import createPassword from './src/services/password/create.js';

prompt.start();

function main() {
  prompt.get(mainPrompt, async function (err, choose) {
    if (err) {
      console.error('Erro:', err);
      return;
    }

    if (choose.select === '1') {
      await createQRCode();
      return;
    }

    if (choose.select === '2') {
      console.log('Você escolheu a opção PASSWORD.');
      await createPassword();
      return;
    }

    console.log('Opção inválida.');
  });
}

main();




