interface IOne{
    daysActive: number;
    move(city: string): void;
}

interface IMoveable <T>{
    attack(enemy: T): void;
    defend(city: string): void;
}

interface IMachine{
    callSign: string;
    crewNumber: number;
}

interface IName{
    name:string;
}

interface ISolider extends IOne, IMoveable <ISolider>, IName {}
interface ITank extends IOne, IMoveable <ITank>, IMachine {}
//So with all these different interfaces and what not I can piece together units
interface IMedic extends IOne, IName{
    heal(solider: ISolider): void;
}

interface ISubmarine extends IOne, IMachine{
    dive(depth: number): void;
}

abstract class Base implements IOne {
    daysActive: number = 0;
    move(city: string): void {
        console.log(`Moving to city of ${city}`);
    }
    public dayIncrementer (): void {
        this.daysActive++;
    }
    // So maybe I am still confused on how the principle of tell don't ask, but from what I understood is that data and the logic
    // mutates that data should be all in the same place.
    getDaysActive(): void{
        console.log(`${this.daysActive} days active in the field sir!`);
    }
}

abstract class MoveAbleUnit extends Base implements IMoveable <U>  {
    // still need a little coaching on these generics
        attack(enemy: U): void {
        this.dayIncrementer();
        enemy.dayIncrementer();
        // this is still asking enemy to increment not telling the sum bitch
        console.log(`Attacking enemy unit ${enemy.name} sir!` )
    }
        defend(city: string): void {
        this.dayIncrementer();
        console.log(`Defending city of ${city}`);
    }
}

class Tank extends MoveAbleUnit implements ITank {
    constructor (public callSign: string, attack: number){
        super();
    }
    crewNumber = 0;
}

class Soldier extends MoveAbleUnit implements ISolider{
    constructor (public name: string){
        super();
    }
}

class Medic extends Base implements IMedic {
    constructor (public name: string){
        super();
    }
    heal(soldier: ISolider) : void {
        this.dayIncrementer()
        console.log(`Healing solider ${soldier.name}`);
    }
}

class Submarine extends Tank implements ISubmarine{
    dive(depth: number): void {
        console.log(`Dive Dive Dive! ${depth}`)
    }
}

const friendylySoldier = new Soldier ("Mark");
const enemySoldier = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin");

friendylySoldier.getDaysActive();
enemySoldier.getDaysActive();