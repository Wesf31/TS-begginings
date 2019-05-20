interface IOne {
    daysActive: number

    // the thought here was to pull out the common properties of IMedic and ISolider So I could use this common Interface for both
}
//
interface IHuman extends IUnit{

}
abstract class Commands {
    public activityCounter(unit: IUnit): void {
        unit.daysActive++
        //In the exposed
    }
    abstract attack<T extends IUnit >(enemy: T ): void;
    abstract defend(city: string) : void;
}

 abstract class MoveAbleUnit <T extends IUnit > implements IUnit  {
    private daysActive: number = 0;
    attack(enemy: T ): void {

        console.log(`Attacking enemy unit ${enemy.name} sir!` )
    }
    defend(city: string) : void {       
        console.log(`Defending city of ${city}`);
    }
    move(city: string) : void {
        console.log(`Moving to city of ${city}`);
    }
}

interface IMedic extends IUnit {
    heal(soldier: IUnit): void;
}

interface ITank extends IUnit, Commands {
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
// Just get write out all the implementation of all the concreate classes that I need and progressively pull them up one up. I will have a heirarchy of at least 3 levels
class Soldier {
    constructor(public name: string) {
        super()
    }
}
//
class Tank extends Commands implements ITank  {
    constructor ( public callSign: string) {
        super();
    }
    daysActive: 0;
    crewNumber: number;
    attack<T extends IUnit >(enemy: T ): void {
        this.activityCounter(enemy)
        this.daysActive++
        console.log(`Attacking enemy unit ${enemy.callSign} sir!` )
    }
}

class Medic  {
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

    crewNumber: number = 0;

    daysActive: number = 0;
    
    move(city: string): void {
        console.log(`Moving to city of ${city}`);
    }
    dive(depth: number): void {
        console.log(`Dive Dive Dive! Depth ${depth}`)
    }
}



const friendylySoldier = new Soldier ("Mark");
const enemySoldier = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin");

console.log(friendylySoldier.daysActive);
console.log(enemySoldier.daysActive);