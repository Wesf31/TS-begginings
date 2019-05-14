interface IUnit {
    name?: string;
    daysActive: number;
    move(city: string): void;
}

abstract class Commands {
    public activityCounter(enemy: IUnit, friendylySoldier: IUnit): void {
        enemy.daysActive++, friendylySoldier.daysActive++
    }
    attack<T extends IUnit >(enemy: T ): void {
        this.activityCounter(enemy, friendylySoldier)
        console.log(`Attacking enemy unit ${enemy.name} sir!` )
    }
    defend(city: string) : void {
        this.activityCounter(enemySoldier, friendylySoldier)       
        console.log(`Defending city of ${city}`);
    }
    move(city: string) : void {
        this.activityCounter(enemySoldier, friendylySoldier)
        console.log(`Moving to city of ${city}`);
    }
}

interface IMedic extends IUnit {
    heal(soldier: IUnit): void;
}

interface ITank extends IUnit, Commands {
    callSign: string;
    crewNumber: number;
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

class Soldier extends Commands implements IUnit {
    constructor(public name: string) {
        super()
    }
    daysActive : number;
}

class Medic extends Commands implements IMedic {
    constructor(public name: string) {
        super()
    }
    public daysActive : number;
    heal(soldier: IUnit) : void {
        console.log(`Healing solider ${soldier.name}`);
    }
}

class SubmarineConcreate extends Submarine {
    constructor(public callSign: string) {
        super ();
    }
    move(city: string) : void {
        console.log(`Moving to city of ${city}`);
    }
    //def need to use move method across all the different concreate classes
}

class Tank extends Commands implements ITank  {
    constructor ( public callSign: string) {
        super();
    }
    daysActive: 0;
    crewNumber: number;
}

const friendylySoldier = new Soldier ("Mark");
const enemySoldier = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin");

console.log(friendylySoldier.daysActive);
console.log(enemySoldier.daysActive);