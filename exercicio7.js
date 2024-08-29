const form = document.getElementById('form-numeros');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.querySelector('.message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (isNaN(valorA) || isNaN(valorB)) {
        mensagem.style.display = 'none';
    } else {
        if (valorB > valorA) {
            mensagem.textContent = 'Formulário válido: Campo B é maior que Campo A.';
            mensagem.className = 'message positive'; 
        } else {
            mensagem.textContent = 'Formulário inválido: Campo B deve ser maior que Campo A.';
            mensagem.className = 'message negative';
        }
        mensagem.style.display = 'block';
    }
});

