function Character(name, level, power){
this.name = name;
this.level = level;
this.power = power;
this.xp = xp = 0;
}

const spiderman = new Character("spiderman", 20,100);
const Kratos = new Character("Kratos", 9, 1000);

console.log(spiderman);
console.log(Kratos);

Character.prototype.damage = function(){
    return`De acuerdo a su poder de ${this.power}
    el personaje ${this.name} puede hacer ${this.power * .15} 
    de daño
    `;
}

Character.prototype.updateXP = function(){
    this.xp +=10;
    return `Experiencia de ${this.name} aumentada a ${this.xp}`;
}

Character.prototype.updateLevel = function(){
    if (this.xp >= 100){
        this.level += 1;
        this.xp = 0;
        return `${this.name} ha subido al nivel ${this.level}!`;
    }
    return `${this.name} necesita ${100 - this.xp} mas de xp para subir de nivel`;
}


console.log(spiderman.damage());
console.log(Kratos.damage());

/*
  1. agregar una propiedad mas, experiencia o xp
  2. crear metodo que aumente en 10 la experiencia updateXP
  3. crear otro metodo que si la experiencia del personaje
  = > 100 sube 1 nivel update level
  */

 console.log(spiderman.updateXP());
 console.log(spiderman.updateXP());
 console.log(spiderman.updateXP());
 console.log(spiderman.updateXP());
 console.log(spiderman.updateXP());
 console.log(spiderman.updateXP());
 console.log(spiderman.updateXP());
 console.log(spiderman.updateXP());
 console.log(spiderman.updateXP());
 console.log(spiderman.updateXP());
 console.log(spiderman.updateLevel());
 console.log(spiderman.updateLevel());



 String.prototype.getInitials = function(){
    //en este caso this apunta a la cadena donde sea usado el metodo 
    const cadenaArr = this.split(" ");
    const initialsArr = cadenaArr.map((cadena) => cadena [0]);
    return initialsArr.join(".").toUpperCase();
 }


 console.log("Emmanuel Grey".getInitials());
 console.log("Jorge Francisco Yañez Araiza".getInitials());

 "Emmanuel Grey".getInitials();
