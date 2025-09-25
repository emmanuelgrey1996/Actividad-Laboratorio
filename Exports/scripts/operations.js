//Cuando exportamos una clase, todo lo que esta dentro va a ser exportado
export class Operations{



 static add(a,b){
    return a + b;
 }
  //cantidad + IVA
  static getTotaWithlIVA(amount){
    return amount * 1.16;
  }
 //IVA solito
  static getIVA(amount){
    return amount * .16;  
}

/*get ISR obtener cuanto pagamos de ISR
4,910.19	8,629.20	288.33	10.88
8,629.21	10,031.07	692.96	16.00
10,031.08	12,009.94	917.26	17.92
12,009.95	24,222.31	1,271.87	21.36
24,222.32	38,177.69	3,880.44	23.52
*/
static getISR(SALARY){
    //array de porcentajes de isr representados en decimal
    const percentagesISR = [0.1088, 0.16, 0.1792, 0.2136, 0.2352];
    const cuotafija = [288.33, 692.96, 917.256, 1271.87, 3880.44];

    switch(true){
        case SALARY >= 4910.19 && SALARY <= 8629.20:
         return cuotafija + (percentagesISR[0] * (SALARY - 4910.19)) 
         break;
         case SALARY >= 8629.21 && SALARY <= 10031.07:
            return cuotafija[1] + (percentagesISR[1] * (SALARY - 8629.21));
         break;
         case SALARY >= 10031.08 && SALARY <= 12009.94:
            return cuotafija[2] + (percentagesISR[2] * (SALARY - 10031.08));
         break;
         case SALARY >= 12009.94 && SALARY <= 24222.31:
            return cuotafija[3] + (percentagesISR[3] * (SALARY - 12009.94));
         break;
         case SALARY >= 24222.31 && SALARY <= 38177.69:
            return cuotafija[4] + (percentagesISR[4] * (SALARY - 24222.31));
         break;
         //retornamos -1 como caso de error 
         default:
            return -1;  
    }
}
 static getSalaryMinusISR(SALARY){
         //guard clause , early return
         if(this.getISR(SALARY) === -1) return "Tu salario no esta previsto en nuestra tabla";
         return SALARY - this.getISR(SALARY); 
}         

    /*
    1. getSalaryMinusISR
    2. retornar el salario despues de la retencion del ISR
    3. pro tip pueden ocupar el metodo get ISR  
    */

}



