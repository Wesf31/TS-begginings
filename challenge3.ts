// Create a class that implements the above class. The implementation should make the code below produce
// the requested output to the conosole. 

interface ISoldier {
    name: string;
    daysActive?: number;
    attack(enemy: Soldier): void;
    defend(city: string): void;
}

class Soldier implements ISoldier {
    public daysActive = 0;
    constructor(public name: string) {};
    // keep constructor params to minimum 
    attack(enemy: Soldier): void  {
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

const friendylySoldier = new Soldier ("Mark");

// default parameter must be at the very end of the arg
const enemySoldier = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin")

console.log(friendylySoldier.daysActive)
console.log(enemySoldier.daysActive)

//console output
//Attacking enemy soldier Jeff sir!
//Defending city of Berlin
//2
//1