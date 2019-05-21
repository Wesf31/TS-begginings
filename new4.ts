interface IOne{
    daysActive: number;
    move(city: string): void;
    dayIncrementer(daysActive: number): void;
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

interface ISolider extends IOne, IMoveable <ISolider>, IName{}
interface ITank extends IOne, IMoveable <ITank>, IMachine {}
//So with all these different interfaces and what not I can piece together units
//Is this too much inheritance? 
interface IMedic extends IOne, IName{
    heal(solider: ISolider): void;
}

interface ISubmarine extends IOne, IMachine{
    dive(depth: number) : void;
}

abstract class Base {
    daysActive: number = 0;
    move(city: string): void {
        console.log(`Moving to city of ${city}`);
    }
    dayIncrementer (): void {
        this.daysActive++;
    }
}

abstract class MoveAbleUnit extends Base implements IMoveable <U>  {
    attack(enemy): void {
        this.dayIncrementer()
        enemy.dayIncrementer()
        // this is still asking enemy to increment not telling the sum bitch
        console.log(`Attacking enemy unit ${enemy.name} sir!` )
    }
    defend(city: string) : void {
        this.dayIncrementer()
        console.log(`Defending city of ${city}`);
    }
}

class Tank extends MoveAbleUnit implements ITank {
    constructor (public callSign: string){
        super()
    }
    crewNumber = 0
}

class Soldier extends MoveAbleUnit implements ISolider{
    constructor (public name: string){
        super()
    }
}

const friendylySoldier = new Soldier ("Mark");
const enemySoldier = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin");

console.log(friendylySoldier.daysActive);
console.log(enemySoldier.daysActive);