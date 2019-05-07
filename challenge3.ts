// Create a class that implements the above class. The implementation should make the code below produce
// the requested output to the conosole. 

interface ISoldier1 {
    name: string;
    daysActive?: number;
    attack(enemy: Soldier1): void;
    defend(city: string): void;
}

class Soldier1 implements ISoldier1 {
    public daysActive = 0;
    constructor(public name: string) {};
    // keep constructor params to minimum 
    attack(enemy: Soldier1): void  {
        this.daysActive++;
        enemy.daysActive++;
        console.log(`Attacking enemy soldier ${enemy.name} sir!`);
        // change methods to reflect the daysactive for the enemy soldier
    }
    defend(city: string) : void {
        this.daysActive++;
        console.log(`Defending city of ${city}`);
    }
}

const friendylySoldier1 = new Soldier1 ("Mark");

// default parameter must be at the very end of the arg
const enemySoldier1 = new Soldier1("Jeff");

friendylySoldier1.attack(enemySoldier1);
friendylySoldier1.defend("Berlin")

console.log(friendylySoldier1.daysActive)
console.log(enemySoldier1.daysActive)

//console output
//Attacking enemy soldier Jeff sir!
//Defending city of Berlin
//2
//1