interface ISoldier {
    name: string;
    daysActive?: number;
    attack(enemy: Soldier): void;
    defend(city: string): void;
}

class Soldier1 implements ISoldier {
    public daysActive = 0;
    constructor(public name: string) {};
    attack(enemy: Soldier): void  {
        this.daysActive++;
        enemy.daysActive++;
        console.log(`Attacking enemy soldier ${enemy.name} sir!`);
    }
    defend(city: string) : void {
        this.daysActive++;
        console.log(`Defending city of ${city}`);
    }
}

const friendylySoldier1 = new Soldier ("Mark");

const enemySoldier1 = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin")

console.log(friendylySoldier.daysActive)
console.log(enemySoldier.daysActive)