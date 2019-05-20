interface IBase{
    daysActive: number;
    move(city: string): void;
}

interface IMoveable{
    attack(enemy: ITank): void;
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
interface IMedic extends IOne, IMoveable, IName{
    heal(solider: ISolider): void;
}

interface ISubmarine extends IOne, IMachine{
    dive(depth: number) : void;
}

abstract class One {
    constructor (public daysActive: number){
    }
    move(city: string) : void {
        this.daysActive++
        console.log(`Moving to city of ${city}`);
    }
}