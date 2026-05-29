/*any(qualquer) aceita qualquer tipo de valor, 
seja string, number, boolean, array, objeto, etc. 
Ele é útil quando não sabemos o tipo exato do valor que será atribuído 
a uma variável ou quando queremos permitir que uma variável possa receber 
diferentes tipos de valores ao longo do tempo.*/
function showMessage(message: any){
    return message;
}

console.log(showMessage("Hello, World!")); // Output: Hello, World!
console.log(showMessage(123)); // Output: 123
console.log(showMessage([4, 5, 6])); // Output: [4, 5, 6]
console.log(showMessage({ name: "Alice", age: 30 })); // Output: { name: "Alice", age: 30 }