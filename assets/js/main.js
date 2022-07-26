function meuEscopo() {

  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  function calculaIMC(event) {

    event.preventDefault();

    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    altura.value = altura.value.replace(',', '.');
    peso.value = peso.value.replace(',', '.');

    if (altura.value.length === 3) {
      altura.value = altura.value / 100;
      altura.value = altura.value.concat('0');
    }

    const calculo = peso.value / (altura.value * altura.value);

    if (isNaN(calculo) || calculo === 0 || calculo === Infinity) {

      resultado.style = 'background-color: var(--primary-color-obesidade)';
      return resultado.innerHTML = `<p>Valor Inválido/Não Informado</p>`;

    } else if (calculo < 18.5) {
      retornaEstilo('background-color: var(--primary-color-abaixo)');
      return resultado.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (Abaixo do peso)</p>`;
    } else if (calculo >= 18.5 && calculo <= 24.9) {
      retornaEstilo('background-color: var(--primary-color-normal)');
      return resultado.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (Peso normal)</p>`;
    } else if (calculo >= 25 && calculo <= 29.9) {
      retornaEstilo('background-color: var(--primary-color-sobrepeso)');
      return resultado.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (Sobrepeso)</p>`;
    } else if (calculo >= 30 && calculo <= 34.9) {
      retornaEstilo('background-color: var(--primary-color-obesidade)');
      return resultado.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 1)</p>`;
    } else if (calculo >= 35 && calculo <= 39.9) {
      retornaEstilo('background-color: var(--primary-color-obesidade)');
      return resultado.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 2)</p>`;
    } else {
      retornaEstilo('background-color: var(--primary-color-obesidade)');
      return resultado.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (Obesidade grau 3)</p>`;
    }

  }

  function retornaEstilo(estilo) {
    return resultado.style = `${estilo}`;
  }


  form.addEventListener('submit', calculaIMC);
}


meuEscopo();