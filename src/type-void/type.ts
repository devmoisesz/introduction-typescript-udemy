/* Void(vazio) é um tipo de dado 
utilizado em funções e métodos que não retornam nenhum valor. 
Ele indica que a função ou método não tem um valor de retorno 
específico e é usado principalmente para indicar que a função 
é executada apenas por seus efeitos colaterais, 
como imprimir algo no console ou modificar o estado de um objeto.*/
function noReturn(...args: string[]): void {
    console.log(args.join("")); 
}

const pessoa = {
    nome: "Moisés",
    sobreNome: "Figueiredo",

    // O método fullname é declarado com o tipo de retorno void,
    // indicando que ele não retorna nenhum valor.
    fullname(): void {
        console.log(`${this.nome} ${this.sobreNome}`);
    }
}

pessoa.fullname(); // Output: Moisés Figueiredo
noReturn("Hello", "world!"); // Output: Hello world!


export default { pessoa } // Exporta o objeto pessoa para ser utilizado em outros módulos.