export class Warrior {
  constructor(
    private _name: string,
    private _hitPoints: number,
    private _hp: number
  ) {}
  public get name(): string {
    return this._name;
  }
  public get hitPoints(): number {
    return this._hitPoints;
  }
  public get hp(): number {
    return this._hp;
  }
  public set hp(value: number) {
    this._hp = value;
  }

  levelUp(): void {
    this._hitPoints *= 1.1;
    this.hp *= 1.1;
  }
}
