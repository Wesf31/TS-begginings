interface ISoldier {
    name: string;
    daysActive?: number;
    attack(enemy: Soldier1): void;
    defend(city: string): void;
    move(city: string): void;
}

interface IMedic extends ISoldier {
    heal(soldier: ISoldier): void;
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

class Soldier implements ISoldier {
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
        this.daysActive++;
        console.log(`Moving to city of ${city}`);
    }
}

class Medic extends Soldier implements IMedic {
    heal(soldier: ISoldier) : void {
        this.daysActive++;
        console.log(`Healing solider ${soldier.name}`);
    }
}
class SubmarineConcrete extends Submarine {
    constructor(public callSign: string) {
        super ();
    }
    move(depth: string): void{
        this.daysActive++;
        console.log(`Dive Dive Dive! Depth ${depth}`);
    }
}

class Tank implements ITank  {
    constructor ( public callSign: string) {
    }
    public crewNumber: number
    public daysActive = 0
    attack(enemy: ITank): void  {
        this.daysActive++;
        enemy.daysActive++;
        console.log(`Attacking enemy tank ${enemy.callSign} sir!`);
    }
    defend(city: string) : void {
        this.daysActive++;
        console.log(`Defending city of ${city}`);
    }
    move(city: string): void{
        this.daysActive++;
        console.log(`Moving to city of ${city}`);
    }

}

const friendylySoldier = new Soldier ("Mark");

const enemySoldier = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin")

console.log(friendylySoldier.daysActive)
console.log(enemySoldier.daysActive)