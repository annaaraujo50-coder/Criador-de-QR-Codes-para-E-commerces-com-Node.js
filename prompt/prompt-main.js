import chalk from 'chalk';

const mainPrompt = [
    {
        name: "select",
        description: chalk.blue.bold
            ("Escolha uma ferramenta (1 - QR CODE ou 2 - PASSWORD):")
        ,
        pattern: /^[1-2]+$/,
        message: chalk.red.italic(
            "Por favor, escolha uma opção válida (1 ou 2)."),
        required: true,

    },
];

export default mainPrompt;