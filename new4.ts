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
//Is this too much inheritance? 
interface IMedic extends IOne, IName{
    heal(solider: ISolider): void;
}

interface ISubmarine extends IOne, IMachine{
    dive(depth: number): void;
}

abstract class Base implements IMoveable <L> {
    daysActive: number = 0;
    health: number = 100;
    damage: number = 5;
    move(city: string): void {
        console.log(`Moving to city of ${city}`);
    }
    attack(enemy): void {
        this.dayIncrementer();
        enemy.gotAttacked(this.damage);
        // this is still asking enemy to increment not telling the sum bitch
        console.log(`Attacking enemy unit ${enemy.name} sir!`);
    }
    defend(city: string): void {
        this.dayIncrementer();
        console.log(`Defending city of ${city}`);
    }
    private dayIncrementer (): void {
        this.daysActive++;
    }
    gotAttacked(damage: number): void {
        this.health = this.health - damage;
        this.dayIncrementer();
    }
    getDaysActive(): void{
        console.log(`${this.daysActive} days active in the field sir!`);
    }
    getHealth(): void {
        console.log(`Current health is ${this.health}`);
    }
}

// abstract class MoveAbleUnit extends Base implements IMoveable <U>  {
//     attack(enemy): void {
//         this.dayIncrementer();
//         enemy.dayIncrementer();
//         enemy.gotAttacked(this.damage);
//         // this is still asking enemy to increment not telling the sum bitch
//         console.log(`Attacking enemy unit ${enemy.name} sir!` )
//     }
//     defend(city: string): void {
//         this.dayIncrementer();
//         console.log(`Defending city of ${city}`);
//     }
// }

class Tank extends Base implements ITank {
    constructor (public callSign: string, attack: number){
        super();
    }
    crewNumber = 0
}

class Soldier extends Base implements ISolider{
    constructor (public name: string){
        super();
    }
}

const friendylySoldier = new Soldier ("Mark");
const enemySoldier = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin");

friendylySoldier.getDaysActive();
enemySoldier.getDaysActive();
enemySoldier.getHealth();