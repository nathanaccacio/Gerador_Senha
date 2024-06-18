//Escolhe itens do documento HTML e os guarda em variáveis
const passInput = document.querySelector("#InputSenhaId");
const lenInput = document.querySelector("#InputComprimentoId");
const infoLength = document.querySelector('label[for="InputComprimentoId"]');
const btnGerar = document.querySelector("#BtnGerar");

// Escolhe as caixas de seleção para caracteres
const chkLower = document.querySelector("#ChkMinusculoId");
const chkUpper = document.querySelector("#ChkMaiusculoId");
const chkNumber = document.querySelector("#ChkNumeroId");
const chkSymbols = document.querySelector("#ChkSimbolosId");

// Listas com números e símbolos
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

// Cria listas de letras minúsculas e maiúsculas 
const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

// Exibe o valor inicial do comprimento da senha 
infoLength.innerHTML = lenInput.value;

lenInput.addEventListener("change", () => {
  infoLength.innerHTML = lenInput.value;
});

// Acrescenta um listener ao botão de criar senha
btnGerar.addEventListener("click", () => {
  generatePassword(
    chkNumber.checked,
    chkSymbols.checked,
    chkLower.checked,
    chkUpper.checked,
    lenInput.value
  );
});
// Função para criar a senha
const generatePassword = (
  hasNumbers,
  hasSymbols,
  hasLowercase,
  hasUppercase,
  lenght
) => {
  const newArray = [ // Cria uma lista combinando os tipos de caracteres escolhidos
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasLowercase ? LowercaseCaracters : []),
    ...(hasUppercase ? UppercaseCaracters : []),
  ];

  if (newArray.length === 0) return;

  let password = "";

    // Cria a senha com o comprimento selecionado
  for (let i = 0; i < lenght; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    password += newArray[randomIndex];
  }

  passInput.value = password;
};