import prompt from 'prompt';
import promptQRCode from '../../../prompt/prompt-qrcode.js';
import handleQRCode from './handle.js';

async function createQRCode() {
  prompt.get(promptQRCode, async (err, result) => {
    if (err) {
      console.error('Erro:', err);
      return;
    }

    await handleQRCode(result);
  });
}

export default createQRCode;
