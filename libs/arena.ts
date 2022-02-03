import { Warrior } from './warrior';

enum ActiveWarrior {
  First,
  Second,
}

export class Arena {
  activeWarrior: ActiveWarrior = ActiveWarrior.Second;
  constructor(public warrior1: Warrior, public warrior2: Warrior) {}

  fight(): Warrior | null {
    const attacker =
      this.activeWarrior === ActiveWarrior.First
        ? this.warrior1
        : this.warrior2;
    const attacked =
      this.activeWarrior === ActiveWarrior.First
        ? this.warrior2
        : this.warrior1;

    const attackingHitPoints = attacker.getHitPoints();
    const attackedOldHp = attacked.getHp();
    const attackedNewHp = attackedOldHp - attackingHitPoints;
    console.log(
      attacker.getName(),
      'id attacking',
      attacked.getName(),
      'and how he has',
      attackedNewHp,
      'hp'
    );

    attacked.setHp(attackedNewHp);
    this.activeWarrior =
      this.activeWarrior === ActiveWarrior.First
        ? ActiveWarrior.Second
        : ActiveWarrior.First;

    if (attackedNewHp <= 0) {
      console.log(attacked.getName(), 'goes to Valhalla');
      return attacker;
    }

    return null;
  }
}
