import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monsters: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, monsters: (SimpleFighter | Fighter)[]) {
    super(player);
    this._player = player;
    this._monsters = [...monsters];
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      do {
        this._player.attack(monster);
        monster.attack(this._player);
      }
      while (this._player.lifePoints < 0 && monster.lifePoints < 0);
    });

    return super.fight();
  }
}
