const personalInformation = {
    name: "Emmanuel",
    lastName: "Grey",
    age: 31,
    aboutMe: function(){
        return "Mi banda favorita es the kilers y la cancion LA woman"
    },
  favoriteAnimals: ["León", "Delfín", "Águila", "Tigre", "Lobo"]
};
//notacion punto
console.log(personalInformation.lastName);
console.log(personalInformation.name);
console.log(personalInformation.aboutMe());
console.log(personalInformation["age"]);
console.log(personalInformation.favoriteAnimals);
console.log(personalInformation.favoriteAnimals[2]);

/* destructuring
   Es en forma de obtener valores de un objetoo array, asignandolos
   inmediatamente a una variable
*/ 


//destructuring de objetos, no importa el orden 

const {name,age,lastName, favoriteAnimals} = personalInformation;
console.log("destructuring" + name);
console.log("destructuring" + age);
console.log(lastName);

//destructuring de arrays, si importa el orden*/ 
const [first, second, third] = favoriteAnimals;
const [,,tercerAnimal] = favoriteAnimals; // ← Dos comas y nuevo nombre
console.log("Tercer animal:", tercerAnimal); // Águila

// Funcion Math.pi

function calculateCircumference(radius) {
  return Math.PI * (radius ** 2);
}
console.log(calculateCircumference(5))

// cambiar el valor
personalInformation.age = 35;
console.log(personalInformation.age);
personalInformation.hello = function(){
    console.log("hola")
}

personalInformation.hello();
