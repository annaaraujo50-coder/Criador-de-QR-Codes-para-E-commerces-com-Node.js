import qr from 'qrcode-terminal';
import chalk from 'chalk';

async function handleQRCode(result) {
  const isSmall = result.type === '2';

  qr.generate(result.link, { small: isSmall }, (qrCode) => {
    console.log(chalk.green.bold('QR Code gerado com sucesso!'));
    console.log(qrCode);
  });
}

export default handleQRCode;
