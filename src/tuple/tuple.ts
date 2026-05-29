// Tuple - é um tipo de dado que permite armazenar uma coleção de valores de tipos diferentes em uma única variável.
const clientData1: readonly [number, string] = [1, 'Moisés']
const clientData2: [number, string, string?] = [3, 'Gustavo', 'Guanabara']
const clientData3: [number, string, ...string[]] = [2, 'Taila', 'Vasconcelos']


//clientData1[0] = 2

clientData2[0] = 2

clientData3[0] = 3
clientData3[2] = 'Figueiredo'
clientData3[3] = 'Vasconcelos'

console.log(clientData1)
console.log(clientData2)
console.log(clientData3)

/* readonly - é um modificador de tipo que torna um array ou tupla imutável, 
ou seja, seus elementos não podem ser alterados após a criação. 
Ele pode ser aplicado a arrays e tuplas para garantir que os dados 
contidos neles permaneçam constantes ao longo do tempo.*/
const array1: readonly string[] = ['Luis', 'Otávio']
const array2: ReadonlyArray<number> = [67]

console.log('array 1' ,array1)
console.log('array 2' ,array2)