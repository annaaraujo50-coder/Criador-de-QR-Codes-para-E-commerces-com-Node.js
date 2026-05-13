function parseBoolean(value) {
  return String(value).trim().toLowerCase() === "true";
}

function getPasswordConfig() {
  return {
    uppercase: parseBoolean(process.env.UPPERCASE_LETTERS),
    lowercase: parseBoolean(process.env.LOWERCASE_LETTERS),
    numbers: parseBoolean(process.env.NUMBERS),
    specialCharacters: parseBoolean(process.env.SPECIAL_CHARACTERS),
    length: Number(process.env.PASSWORD_LENGTH ?? 0),
  };
}

function buildCharacterPool(config) {
  const pool = [];

  if (config.uppercase) {
    pool.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  }

  if (config.lowercase) {
    pool.push(..."abcdefghijklmnopqrstuvwxyz".split(""));
  }

  if (config.numbers) {
    pool.push(..."0123456789".split(""));
  }

  if (config.specialCharacters) {
    pool.push(..."!@#$%^&*()_+".split(""));
  }

  return pool;
}

function validateConfig(config, pool) {
  if (pool.length === 0) {
    throw new Error(
      "Nenhum tipo de caractere habilitado. Ative ao menos um dos valores: UPPERCASE_LETTERS, LOWERCASE_LETTERS, NUMBERS ou SPECIAL_CHARACTERS."
    );
  }

  if (!Number.isInteger(config.length) || config.length <= 0) {
    throw new Error("PASSWORD_LENGTH deve ser um número inteiro maior que zero.");
  }
}

function generatePassword(pool, length) {
  let password = "";

  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    password += pool[randomIndex];
  }

  return password;
}

function handle() {
  const config = getPasswordConfig();
  const pool = buildCharacterPool(config);

  validateConfig(config, pool);

  return generatePassword(pool, config.length);
}

export default handle;
