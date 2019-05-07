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

class Medic extends Soldier1 implements IMedic {
    heal(soldier: ISoldier1) : void {
        this.daysActive++;
        console.log(`Healing solider ${soldier.name}`);
    }
}
class Submarine1 extends Submarine implements ITank {
    constructor(public callSign: string) {
        super ();
    }
    move(city: string): void{
        this.daysActive++;
        console.log(`Moving to city of ${city}`);
    }
    attack(enemy: Submarine1): void  {
        this.daysActive++;
        enemy.daysActive++;
        console.log(`Attacking enemy Sub ${this.callSign} sir!`);
    }
    defend(city: string) : void {
        this.daysActive++;
        console.log(`Defending city of ${city}`);
    }
    
}

class Tank implements ITank  {
    constructor ( public callSign: string, public crewNumber: number) {
    }
    // I image if you would ever going to create an instance of a submarine you would need those two args
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

const friendylySoldier1 = new Soldier1 ("Mark");

const enemySoldier1 = new Soldier1("Jeff");

friendylySoldier1.attack(enemySoldier1);
friendylySoldier1.defend("Berlin")

console.log(friendylySoldier1.daysActive)
console.log(enemySoldier1.daysActive)