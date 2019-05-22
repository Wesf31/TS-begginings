interface IBase{
    move(city: string): void;
}

interface IActionAble <T extends IBase>{
    attack(enemy: T): void;
    defend(city: string): void;
}

interface IMachine{
    callSign: string;
    crewNumber: number;
}

interface INameAble{
    name:string;
}

interface ISolider extends IBase, IActionAble <ISolider>, INameAble {}
interface ITank extends IBase, IActionAble <ITank>, IMachine {}
interface IMedic extends IBase, INameAble{
    heal(solider: ISolider): void;
}

interface ISubmarine extends IBase, IMachine{
    dive(depth: number): void;
}

abstract class Base implements IBase {
    private _daysActive: number = 0;
    move(city: string): void {
        console.log(`Moving to city of ${city}`);
    }
    incrementDaysActive() {
        this._daysActive
    }
    public get daysActive(): number{
        return this._daysActive;
    }
    getDaysActive(): void{
        console.log(`${this.daysActive} days active in the field sir!`);
    }
}

class ActionAbleUnit {
    attack(enemy: ISolider): void {
        this.incrementDaysActive();
        enemy.incrementDaysActive();
        console.log(`Attacking enemy unit ${enemy.name} sir!` )
    }
    attack(enemy: ITank, incrementDaysActive: boolean): void {
        this.incrementDaysActive();
        enemy.incrementDaysActive();
        console.log(`Attacking enemy unit ${enemy.name} sir!` )
    }
        defend(city: string): void {
        this.incrementDaysActive();
        console.log(`Defending city of ${city}`);
    }
}

class Tank extends ActionAbleUnit implements ITank {
    constructor (public callSign: string, attack: number){
        super()
    }
    crewNumber = 0;
}

class Soldier extends ActionAbleUnit implements ISolider{
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