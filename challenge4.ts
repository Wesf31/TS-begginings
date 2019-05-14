interface IUnit {
    name: string;
    daysActive: number;
    move(city: string): void;
    // activityCounter(daysActive: string): void
}

abstract class Commands {
    activityCounter(enemy: IUnit, friendylySoldier: IUnit): void {
        enemy.daysActive++, friendylySoldier.daysActive++
    }
    attack<T extends IUnit >(enemy: T ): void {
        console.log(`Attacking enemy unit ${enemy.name} sir!` )
    }
    defend(city: string) : void {
        
        console.log(`Defending city of ${city}`);
    }
}

interface IMedic extends IUnit {
    heal(soldier: IUnit): void;
    //has name daysactive and move
}
// extract the attack method out of both interfaces and make them generic

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

class Soldier extends Action implements ISoldier {
    constructor(public name: string) {
        super();
    }
    attack(enemy: ISoldier): void  {
        this.daysActive++;
        enemy.daysActive++;
        // still telling not asking as far as incrementing the days active, exposed method on the enemy and friendly soldier that ask to increment their daysActive
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
    //def need to use move method across all the different concreate classes
}

class Tank extends Commands implements ITank  {
    constructor ( public callSign: string) {
        super();
    }
    public crewNumber: number;
    attack(enemy: ITank): void  {

        enemy.daysActive++;
        console.log(`Attacking enemy ${enemy.callSign} sir!`);
    }
}

const friendylySoldier = new Soldier ("Mark");

const enemySoldier = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin");

console.log(friendylySoldier.daysActive);
console.log(enemySoldier.daysActive);