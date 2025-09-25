class Character{
    name;
    power;
    level;
    xp;

    constructor(name,power,level,xp){
    this.name = name;
    this.power = power;
    this.level = level;
    this.xp = xp;
    }


damage(){
    return`
    De acuerdo a su poder ${this.power} ${this.name} puede hacer ${this.power * .15} de daño
    `;
}
raiseXp(){
    this.xp +=10;
    return this.raiseLvl();
}
raiseLvl(){
    if(this.xp >= 100){
        this.level++;
        this.xp -= 100;
        return `${this.name} ha alcanzado 100pts de experiencia y subio un nivel, ahora es nivel ${this.level}`
    }else{
        return `${this.name} tiene ${this.xp} de xp y aun no es suficiente para subir de nivel`;   
    }
}
}
const v = new Character("v" ,1500, 45, 50);
const luffy = new Character("luffy", 1100, 19,10);
console.log(v);
console.log(luffy);

for(let i = 0; i < 6; i++){
console.log(v.raiseXp());
}
