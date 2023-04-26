let carrito = {
    montoTotal: 10,
    productos: ["Leche"],
}

console.log(carrito);
console.log(JSON.stringify(carrito));
function agregarProducto(montoTotal,producto,unidades){
carrito.montoTotal=montoTotal;

if(!carrito.productos.includes(producto)){
    carrito.productos.push (producto);
}  
else {
    console.log ("Ya existe el producto");
}
carrito.unidades = unidades
}

agregarProducto(20, "Azucar", 5);
agregarProducto(40, "Pan", 8);
agregarProducto(40, "Leche", 8);
console.log(carrito);

