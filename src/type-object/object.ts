// objeto é uma coleção de propriedades, onde cada propriedade tem um nome e um valor. O tipo do objeto é definido por suas propriedades e seus tipos.
const produto: {
    nome: string;
    preco: number;
    desconto?: number;
} = {
    nome: "Notebook",
    preco: 2500,
};

produto.desconto = 0.1;

console.log(produto);
