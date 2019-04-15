// Create a class that implements the above class. The implementation should make the code below produce
// the requested output to the conosole. 

interface Soldier {
    name: string;
    daysActive: number;
    attack(enemy: Soldier): void;
    defend(city: string): void;
}