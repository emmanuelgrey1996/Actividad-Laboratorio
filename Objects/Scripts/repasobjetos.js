const tienda = {
    stock: 20,
    getStock: function(){
        return this.stock;
    }
}
// Si no pongo parentesis en un metodo obtengo la definicion 
// de la funcion es decir como fue escrita
console.log(tienda.getStock)
// para obtener el valor de retorno o que se ejecute bien el metodo
console.log(tienda.getStock());

//Funcion constructora 
function Gato(name, color){
    this.name = name;
    this.color = color;
}

const gatodeMar = new Gato("juli", "blanco y gris");

console.log(gatodeMar);
//notacion de punto 
console.log(gatodeMar.color);
//notacion de corchetes en objetos
console.log(gatodeMar["name"]);

//destructuring, debe llamarse igual que la llave de la cual queremos obtener el valor 
const {color, name} = gatodeMar;
//lo de arriba seria igual a
const color2 = gatodeMar.color;
const name2 = gatodeMar.name;
console.log(color);
console.log(name);