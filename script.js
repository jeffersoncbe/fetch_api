const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
    profissao: 'estudante',
    dormir: dormir(),
};

function dormir() {
    console.log("tomar banho");
    console.log("escovar os dentes");
    console.log("vista seu pijaminha");
    console.log("deitar");
    console.log("fechar os olhos");
    console.log("contar carneirinhos");
};

console.log(pessoa.dormir)