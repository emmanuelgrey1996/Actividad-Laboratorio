const personalInformation = {
    name: "Emmanuel",
    lastName: "Grey",
    age: 31,
    aboutMe: function(){
        return `Hola soy ${this.name} ${this.lastName} y tengo ${this.age} años`;
    },  // ✅ AGREGAR COMA AQUÍ

    favoriteAnimals: ["León", "Delfín", "Águila", "Tigre", "Lobo"],

    showAnimals: function(){
        return this.favoriteAnimals;
    }
};
console.log(personalInformation.showAnimals());



// Función para calcular área del círculo (CORRECTO)
function calculateCircumference(radius) {
  return Math.PI * (radius ** 2);
};


//funciones flecha no tiene lexical this
    /* hello: () => "Hola" + this.name*/


console.log("Área del círculo:", calculateCircumference(5));
console.log(personalInformation.aboutMe());
