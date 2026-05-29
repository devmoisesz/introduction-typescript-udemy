enum statusPedido {
    PENDENTE = "PENDENTE",
    APROVADO = "APROVADO",
    REJEITADO = "REJEITADO"
}
const pedido1: statusPedido = statusPedido.PENDENTE;
function processarPedido(pedido: statusPedido): void {
    switch (pedido) {
        case statusPedido.PENDENTE: 
            console.log("O pedido está pendente.");
            break; 
        case statusPedido.APROVADO:
            console.log("O pedido foi aprovado.");
            break;
        case statusPedido.REJEITADO:
            console.log("O pedido foi rejeitado.");
            break;
    }
}

processarPedido(pedido1);