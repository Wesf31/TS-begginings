interface IOne{
    daysActive: number;
    move(city: string): void;
}

interface ITwo{
    attack(enemy: ITank): void;
    defend(city: string): void;
}

interface IThree{
    callSign: string;
    crewNumber: number;
}

interface IFour{
    name:string;
}

interface ISolider extends IOne, ITwo, IFour{}

interface IMedic extends IOne, ITwo, IFour{
    heal(solider: ISolider): void;
}

interface ITank extends IOne, ITwo, IThree {}