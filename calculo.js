var operacaoAtual = null;
var num1 = null;

function adicionarNumero(num) {									// Função para adicionar um número no display
  var resultado = document.getElementById('display');
  resultado.value = resultado.value + num;
}

function adicionarOperacao(operacao) {							// Função para adicionar uma operação ao cálculo
  var resultado = document.getElementById('display');
  num1 = parseFloat(resultado.value);
  operacaoAtual = operacao;
  resultado.value = '';
}

function calcular() {											// Função para realizar o cálculo
  var resultado = document.getElementById('display');
  var num2 = parseFloat(resultado.value);
  var total = null;

  switch (operacaoAtual) {										// Executar a operação desejada
    case '+':
      total = num1 + num2;
      break;
    case '-':
      total = num1 - num2;
      break;
    case '*':
      total = num1 * num2;
      break;
    case '/':
      total = num1 / num2;
      break;
	case '^':
	  total = Math.pow(num1, num2);
	  break;
    default:
      break;
  }

  resultado.value = total;
  operacaoAtual = null;
  num1 = null;
}

function limparTela() {											// Função para limpar a tela
  var resultado = document.getElementById('display');
  resultado.value = '';
  operacaoAtual = null;
  num1 = null;
}
