// Array<T> - T[]
function multiplyArgs(...args: number[]): number {
    return args.reduce((acc, valor) => acc * valor, 1); 
}

function concatenaString(...args: string[]): string {
    return args.reduce((acc, valor) => acc + valor, ""); 
}

const result = multiplyArgs(10, 3,);
console.log(result); // Output: 30

console.log(concatenaString("Hello, ", "world", "!")); // Output: "Hello, world!"