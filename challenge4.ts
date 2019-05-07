interface ISoldier1 {
    name: string;
    daysActive?: number;
    attack(enemy: Soldier1): void;
    defend(city: string): void;
    move(city: string): void;
}

interface IMedic extends ISoldier1 {
    heal(soldier: ISoldier1): void;
}

interface ITank {
    callSign: string;
    daysActive: number;
    crewNumber: number;
    attack(enemy: ITank): void;
    defend(city: string): void;
    move(city: string): void;
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

class Soldier1 implements ISoldier1 {
    public daysActive = 0;
    constructor(public name: string) {};
    attack(enemy: Soldier1): void  {
        this.daysActive++;
        enemy.daysActive++;
        console.log(`Attacking enemy soldier ${enemy.name} sir!`);
    }
    defend(city: string) : void {
        this.daysActive++;
        console.log(`Defending city of ${city}`);
    }
    move(city: string) : void {
        this.daysActive++;
        console.log(`Moving to city of ${city}`);
    }
}

class Medic extends Soldier1 {
    heal(soldier: ISoldier1) : void {
        this.daysActive++;
        console.log(`Healing solider ${soldier.name}`);
    }
}
class Tank extends Submarine implements ITank {
    constructor(public callSign: string) {};
    
}

const friendylySoldier1 = new Soldier1 ("Mark");

const enemySoldier1 = new Soldier1("Jeff");

friendylySoldier1.attack(enemySoldier1);
friendylySoldier1.defend("Berlin")

console.log(friendylySoldier1.daysActive)
console.log(enemySoldier1.daysActive)