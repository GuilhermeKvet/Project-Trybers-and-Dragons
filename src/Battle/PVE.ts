import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private monsters: (SimpleFighter | Fighter)[] = [];

  constructor(player: Fighter, monsters: (SimpleFighter | Fighter)[]) {
    super(player);
    this._player = player;
    if (monsters.length > 0) this.monsters = monsters;
  }

  fight(): number {
    this.monsters.forEach((monster) => {
      do {
        this._player.attack(monster);
        monster.attack(this._player);
        if (this._player.lifePoints === -1) break;
      }
      while (this._player.lifePoints === -1 && monster.lifePoints === -1);
    });

    return super.fight();
  }
}