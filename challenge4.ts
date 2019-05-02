interface ISoldier1 {
    name: string;
    daysActive?: number;
    attack(enemy: Soldier): void;
    defend(city: string): void;
    move(city: string): void;
}

interface IMedic {
    name: string;
    daysActive: number;
    heal(soldier: ISoldier): void;
    move(city: string): void;
}

interface ITank {
    callSign: string;
    daysActive: number;
    crewNumber: number;
    attack(enemy: ITank): void;
    defend(city: string): void;
    move(city: string): void;
}

class Soldier1 implements ISoldier1 {
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
    move(city: string) : void {
        console.log(`Move to this city of ${city}`)
    }
}

abstract class Submarine {
    callSign: string;
    daysActive: number;
    crewNumber: number;
    abstract move(city: string): void;
    dive(depth: number): void {
      console.log(`Dive Dive Dive! Depth ${depth}`)
    }
}

const friendylySoldier1 = new Soldier ("Mark");

const enemySoldier1 = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin")

console.log(friendylySoldier.daysActive)
console.log(enemySoldier.daysActive)