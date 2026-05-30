type status = 'pendente' | 'em preparação' | 'saiu entrega' | 'entregue' | 'cancelado'
type complemento = string

type Pedido = {
    nome: string
    status_pedido?: status
    preco_total: number
    endereco: string
    complemento_endereco?: string
}

const pedido: Pedido = {
    nome: 'Pizza',
    preco_total: 79.98,
    endereco: 'Rua 23 de março, 235',
    status_pedido: 'pendente'
}

export function setComplemento(pedido: Pedido, status: status, complemento: complemento): Pedido {
    return {...pedido, status_pedido: status, complemento_endereco: complemento}
}

console.log(pedido)
console.log(setComplemento(pedido, 'em preparação', ''))