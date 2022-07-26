function meuEscopo() {

  const form = document.querySelector('.form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputPeso = form.querySelector('.peso');
    const inputAltura = form.querySelector('.altura');

    inputAltura.value = pontoFlutuante(inputAltura);
    inputPeso.value = pontoFlutuante(inputPeso);

    if (inputAltura.value.length === 3) {
      inputAltura.value = inputAltura.value / 100;
      inputAltura.value = inputAltura.value.concat('0');
    }

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    if (!peso) {
      apresentaResult('Peso inválido', false);
      return;
    }

    if (!altura) {
      apresentaResult('Altura inválida', false);
      return;
    }

    const imc = calculaIMC(peso, altura);
    const resultado = grauImc(imc);

    const msg = `Seu peso é ${imc} (${resultado})`

    apresentaResult(msg, true);

  });

  function pontoFlutuante(valor) {
    return valor.value.replace(',', '.');
  }

  function calculaIMC(peso, altura) {
    return (peso / (altura ** 2)).toFixed(2);
  }

  function grauImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  }

  function criaP() {
    const p = document.createElement('p');
    return p;
  }

  function apresentaResult(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();
    if (isValid) {
      p.classList.add('paragrafo-resultado');
    } else {
      p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
  }

}


meuEscopo();