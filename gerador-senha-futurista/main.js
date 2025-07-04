// main.js - Geração de senha futurista
const senhaInput = document.getElementById('senha');
const copiarBtn = document.getElementById('copiar');
const gerarBtn = document.getElementById('gerar');
const feedback = document.getElementById('feedback');

function gerarSenha() {
  const incluirMaiusculas = document.getElementById('maiusculas').checked;
  const incluirMinusculas = document.getElementById('minusculas').checked;
  const incluirNumeros = document.getElementById('numeros').checked;
  const incluirSimbolos = document.getElementById('simbolos').checked;
  const tamanho = parseInt(document.getElementById('tamanho').value);

  let caracteres = '';
  const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const minusculas = 'abcdefghijklmnopqrstuvwxyz';
  const numeros = '0123456789';
  const simbolos = '!@#$%^&*()_+-={}[]<>?/|';

  if (incluirMaiusculas) caracteres += maiusculas;
  if (incluirMinusculas) caracteres += minusculas;
  if (incluirNumeros) caracteres += numeros;
  if (incluirSimbolos) caracteres += simbolos;

  if (caracteres === '') {
    senhaInput.value = '';
    feedback.textContent = '⚠️ Selecione pelo menos uma opção!';
    return;
  }

  let senha = '';
  for (let i = 0; i < tamanho; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[index];
  }

  senhaInput.value = senha;
  feedback.textContent = '✅ Senha gerada com sucesso!';
}

function copiarSenha() {
  if (senhaInput.value === '') {
    feedback.textContent = '⚠️ Nada para copiar!';
    return;
  }
  navigator.clipboard.writeText(senhaInput.value)
    .then(() => feedback.textContent = '📋 Senha copiada!')
    .catch(() => feedback.textContent = '❌ Erro ao copiar!');
}

copiarBtn.addEventListener('click', copiarSenha);
gerarBtn.addEventListener('click', gerarSenha);

gerarSenha(); // Gera uma senha automaticamente ao carregar
