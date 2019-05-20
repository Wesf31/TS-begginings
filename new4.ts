interface IOne{
    daysActive: number;
    move(city: string): void;
}

interface ITwo{
    attack(enemy: ITank): void;
    defend(city: string): void;
}