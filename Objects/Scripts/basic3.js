function personalInformation(name, lastName, favoriteAnimals){
    this.name = name;
    this.lastName = lastName;
    this.favoriteAnimals = favoriteAnimals; 
}
/*Funcion contructora
Permite crear objetos, y asignarle propiedades durante la creacion.
Para crear objetos con base en esta funcion usamos la palabra resrrvada ?new */ 

const infoEmmanuel = new personalInformation("Emmanuel", "Grey",["gato", "tortuga"]);
console.log(infoEmmanuel)

infoEmmanuel.age = 29;
console.log(infoEmmanuel);

/*
1.Crear funcion constructora de un pedido
2.Nombre de quien hizo el pedido, producto que fue pedido, fecha, direccion donde va a llegar el peido 
3.Crear tres objetos diferentes 
*/

function pedido(nombreCliente, producto, fecha, direccion){
    this.nombreCliente = nombreCliente;
    this.producto = producto;
    this.fecha = fecha;
    this.direccion = direccion

    this.mostrarPedido = function(){
        return`Pedido de: ${this.nombreCliente}, Pedido: ${this.producto} Fecha: ${this.fecha} Direccion: $`
    }
}