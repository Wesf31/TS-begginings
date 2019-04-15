// Create a class that implements the above class. The implementation should make the code below produce
// the requested output to the conosole. 


interface Soldier {
    name: string;
    daysActive: number;
    attack(enemy: Soldier): void;
    defend(city: string): void;
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