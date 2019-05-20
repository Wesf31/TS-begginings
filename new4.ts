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

interface ISolider extends IOne, IMoveable, IName{}
interface ITank extends IOne, IMoveable, IMachine {}
//So with all these different interfaces and what not I can piece together units
//Is this two much inheritance? 
interface IMedic extends IOne, IName{
    heal(solider: ISolider): void;
}

interface ISubmarine extends IOne, IMachine{
    dive(depth: number) : void;
}

abstract class Base implements IBase {
    constructor (public daysActive: 0){
    }
    move(city: string) : void {
        this.daysActive++;
        console.log(`Moving to city of ${city}`);
    }
}

abstract class MoveAbleUnit <T> implements IMoveable  {
    attack(enemy: T ): void {
        console.log(`Attacking enemy unit ${enemy.name} sir!` )
    }
    defend(city: string) : void {       
        console.log(`Defending city of ${city}`);
    }
}

class Solider extends Base, MoveAbleUnit implements IOne, INmae, IMoveable{
    
}