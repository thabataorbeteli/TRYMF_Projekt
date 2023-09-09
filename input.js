const placaVeiculoInput = document.getElementById('placaVeiculo');
const cpfCnpjInput = document.getElementById('cpfCnpj');
const acionarBotao = document.getElementById('acionarButton');

acionarBotao.addEventListener('click', function () {

    const placaVeiculo = placaVeiculoInput.value;
    const cpfCnpj = cpfCnpjInput.value;

 
    console.log('Placa do Veículo:', placaVeiculo);
    console.log('CPF ou CNPJ:', cpfCnpj);
});
