import chalk from 'chalk';

const promptQRCode = [
  {
    name: 'link',
    description: chalk.blue.bold('Digite o link para gerar o QR CODE:'),
    required: true,
  },
  {
    name: 'type',
    description: chalk.blue.bold('Escolha o tipo de QR CODE (1 - normal ou 2 - pequeno):'),
    pattern: /^[1-2]$/,
    message: chalk.red.italic('Por favor, escolha uma opção válida (1 ou 2).'),
    required: true,
  },
];

export default promptQRCode;
