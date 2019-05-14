interface IUnit {
    name?: string;
    daysActive: number;
    move(city: string): void;
}

// abstract class Commands {
//     public activityCounter(unit: IUnit): void {
//         unit.daysActive++
//         }
//     abstract attack<T extends IUnit >(enemy: T ): void;
//     abstract defend(city: string) : void;
//     abstract move(city: string) : void;
// }

 class Commands {
    public activityCounter(unit: IUnit): void {
        unit.daysActive++
        //If i do this than I can ask a unit to increment itself where needed
    }
    attack<T extends IUnit >(enemy: T ): void {
        this.activityCounter(enemy)
        console.log(`Attacking enemy unit ${enemy.name} sir!` )
    }
    defend(city: string) : void {       
        console.log(`Defending city of ${city}`);
    }
    move(city: string) : void {
        this.activityCounter(enemySoldier,)
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

class Soldier extends Commands implements IUnit{
    constructor(public name: string) {
        super()
    }
    daysActive : 0;
    attack<T extends IUnit >(enemy: T ): void {
        //so if I am understanding generiacs right this should allow me to
        this.activityCounter(enemy)
        this.daysActive++
        console.log(`Attacking enemy unit ${enemy.name} sir!` )
    }
    defend(city: string) : void {
        this.daysActive++       
        console.log(`Defending city of ${city}`);
    }
    move(city: string) : void {
        this.daysActive++
        console.log(`Moving to city of ${city}`);
    }
}

class Tank extends Commands implements ITank  {
    constructor ( public callSign: string) {
        super();
    }
    daysActive: 0;
    crewNumber: number;
    attack<T extends ITank >(enemy: T ): void {
        this.activityCounter(enemy)
        this.daysActive++
        console.log(`Attacking enemy unit ${enemy.name} sir!` )
    }
}

class Medic implements IMedic {
    constructor(public name: string) {
    }
    daysActive : number;
    heal(soldier: IUnit) : void {

        this.daysActive++
        console.log(`Healing solider ${soldier.name}`);
    }
    move(city: string) : void {
        this.daysActive++
        console.log(`Moving to city of ${city}`);
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



const friendylySoldier = new Soldier ("Mark");
const enemySoldier = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin");

console.log(friendylySoldier.daysActive);
console.log(enemySoldier.daysActive);