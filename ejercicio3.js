let carrito = {
    montoTotal: 10,
    productos: ["Leche"],
}
console.log(carrito);
console.log(JSON.stringify(carrito));
function agregarProducto(montoTotal,producto,unidades){
carrito.montoTotal=montoTotal;
carrito.productos.push (producto);
carrito.unidades = unidades
}

agregarProducto(20, "Azucar", 5);
console.log(carrito);