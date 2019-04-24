// Create a class that implements the above class. The implementation should make the code below produce
// the requested output to the conosole. 


interface ISoldier {
    name: string;
    daysActive: number;
    attack(enemy: Soldier): void;
    defend(city: string): void;
}

class Solider implements ISoldier {
    
// attack(enemy:)
// use console.logs in the attack and defends methods to show output
}

const friendylySoldier = new Soldier ("Mark");
const enemySoldier = new enemySoldier("Jeff")

friendylySoldier.attack(enemySoldier);
friendylySoldier.defend("Berlin")

console.log(friendylySoldier)
console.log(enemySoldier.daysActive)

//console output
//Attacking enemy soldier Jeff sir!
//Defending city of Berlin
//2
//1