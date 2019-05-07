interface ISoldier {
    name: string;
    daysActive?: number;
    attack(enemy: Soldier1): void;
    defend(city: string): void;
    move(city: string): void;
}

interface IMedic extends ISoldier {
    heal(soldier: ISoldier): void;
}

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
// with just those actions, see below, and just use inheretience with on the concreate classes but the differecne between the
// ITank interface and the ISolider interface made me decide not to. I feel like that line of logic was wrong, where is it wrong?


// abstract class Action {
//     public daysActive = 0;
//     attack(enemy: Soldier): void  {
//         this.daysActive++;
//         enemy.daysActive++;
//         console.log(`Attacking enemy soldier ${enemy.name} sir!`);
//     }
//     defend(city: string) : void {
//         this.daysActive++;
//         console.log(`Defending city of ${city}`);
//     }
//     move(city: string) : void {
//         this.daysActive++;
//         console.log(`Moving to city of ${city}`);
//     }
// }

class Soldier implements ISoldier {
    public daysActive = 0;
    constructor(public name: string) {
    }
    attack(enemy: Soldier): void  {
        this.daysActive++;
        enemy.daysActive++;
        console.log(`Attacking enemy soldier ${enemy.name} sir!`);
    }
    defend(city: string) : void {
        this.daysActive++;
        console.log(`Defending city of ${city}`);
    }
    move(city: string) : void {
        this.daysActive++;
        console.log(`Moving to city of ${city}`);
    }
}

class Medic extends Soldier implements IMedic {
    heal(soldier: ISoldier) : void {
        soldier.daysActive++;
        this.daysActive++;
        console.log(`Healing solider ${soldier.name}`);
    }
}

class SubmarineConcrete extends Submarine {
    constructor(public callSign: string) {
        super ()
    }
    move(city: string) : void {
        this.daysActive++;
        console.log(`Moving to city of ${city}`);
    }
}

class Tank  implements ITank  {
    constructor ( public callSign: string) {}
    public crewNumber: number;
    public daysActive = 0;
    attack(enemy: ITank): void  {
        this.daysActive++;
        enemy.daysActive++;
        console.log(`Attacking enemy tank ${enemy.callSign} sir!`);
    }
    defend(city: string) : void {
        this.daysActive++;
        console.log(`Defending city of ${city}`);
    }
    move(city: string): void{
        this.daysActive++;
        console.log(`Moving to city of ${city}`);
    }
}

const friendylySoldier = new Soldier ("Mark");

const enemySoldier = new Soldier("Jeff");

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin");

console.log(friendylySoldier.daysActive);
console.log(enemySoldier.daysActive);