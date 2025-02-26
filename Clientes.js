function Cliente(nome, idade, numeroTelefone, rua, numeroEndereco, cidade, estado) {
    this.nome = nome;
    this.idade = idade;
    this.telefone = new Telefone(numeroTelefone); 
    this.endereco = new Endereco(rua, numeroEndereco, cidade, estado);

    this.getNome = function() {
        return this.nome;
    };

    this.setNome = function(novoNome) {
        this.nome = novoNome;
    };

    this.getIdade = function() {
        return this.idade;
    };

    this.setIdade = function(novaIdade) {
        this.idade = novaIdade;
    };

    this.getDadosFormatados = function() {
        return (
            '--------------------------------------------\n' +
            `Informações do Cliente:\n` +
            `Nome: ${this.nome}\n` +
            '--------------------------------------------\n' +
            'Telefone:\n' +
            `DDD: ${this.telefone.getNumero().slice(0,2)}\n` + 
            `Número: ${this.telefone.getNumero().slice(2)}\n` +
            '--------------------------------------------\n' +
            `Endereço:\n` +
            `Rua: ${this.endereco.getRua()}\n` +
            `Número: ${this.endereco.getNumero()}\n` +
            `Cidade: ${this.endereco.getCidade()}\n` +
            `Estado: ${this.endereco.getEstado()}\n` + 
            '--------------------------------------------'
        );
    };
}

function Telefone(numero) {
    this.numero = numero;

    this.getNumero = function() {
        return this.numero;
    };

    this.setNumero = function(novoNumero) {
        this.numero = novoNumero;
    };
}

function Endereco(rua, numero, cidade, estado) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado; 

    this.getRua = function() {
        return this.rua;
    };

    this.getNumero = function() {
        return this.numero;
    };

    this.getCidade = function() {
        return this.cidade;
    };

    this.getEstado = function() {
        return this.estado;
    };
}


let cliente1 = new Cliente("Issami Umeoka", 19, "12988992109", "Rua dos Eucalíptos", 20, "São José dos Campos", "SP");
let cliente2 = new Cliente("Yasmin Nunes", 19, "1199999999", "Rua dos Bosques", 448, "São José dos Campos", "SP");
let cliente3 = new Cliente("Retep Griffin", 47, "1599999999", "Rua União da Parábola ", 12, "Taubaté", "SP");

console.log(cliente1.getDadosFormatados());
console.log(cliente2.getDadosFormatados());
console.log(cliente3.getDadosFormatados());
