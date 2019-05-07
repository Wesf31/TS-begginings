interface ISoldier {
    name: string;
    daysActive?: number;
    attack(enemy: ISoldier): void;
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
      console.log(`Dive Dive Dive! Depth ${depth}`);
    }
}

//Because I am using the attack, defend, move methods in more than 1 class I thought I would make an abstract class
// with just those actions, see below, and just use inheretience with on the concreate classes 

abstract class Action {
    public daysActive = 0;
    defend(city: string) : void {
        this.daysActive++;
        console.log(`Defending city of ${city}`);
    }
    move(city: string) : void {
        this.daysActive++;
        console.log(`Moving to city of ${city}`);
    }
}

class Soldier extends Action implements ISoldier {
    constructor(public name: string) {
        super();
    }
    attack(enemy: ISoldier): void  {
        this.daysActive++;
        enemy.daysActive++;
        console.log(`Attacking enemy soldier ${enemy.name} sir!`);
    }
}

class Medic extends Soldier implements IMedic {
    heal(soldier: ISoldier) : void {
        soldier.daysActive++;
        this.daysActive++;
        console.log(`Healing solider ${soldier.name}`);
    }
}

class SubmarineConcreate extends Submarine {
    constructor(public callSign: string) {
        super ();
    }
    move(city: string) : void {
        this.daysActive++;
        console.log(`Moving to city of ${city}`);
    }
}

class Tank extends Action implements ITank  {
    constructor ( public callSign: string) {
        super();
    }
    public crewNumber: number;
    attack(enemy: ITank): void  {
        this.daysActive++;
        enemy.daysActive++;
        console.log(`Attacking enemy tank ${enemy.callSign} sir!`);
    }
}

const friendylySoldier = new Soldier ("Mark");

const enemySoldier = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin");

console.log(friendylySoldier.daysActive);
console.log(enemySoldier.daysActive);