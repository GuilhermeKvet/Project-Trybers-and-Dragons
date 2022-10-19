import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const randomNumber: number = getRandomInt(1, 10);

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._race = new Elf(this._name, 99);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = randomNumber;
    this._defense = randomNumber;
    this._energy = { type_: this._archetype.energyType, amount: randomNumber };
    this._dexterity = randomNumber;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    const type = this._energy.type_;
    const { amount } = this._energy;
    return { type_: type, amount }; 
  }

  special?(enemy: Fighter): void {
    const ENEMY = enemy;
    this._lifePoints += 20;

    if (this._race.maxLifePoints < this._maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    
    ENEMY.lifePoints -= this.strength * 2;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    const ENEMY = enemy;
    ENEMY.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._maxLifePoints += randomNumber;
    this._strength += randomNumber;
    this._dexterity += randomNumber;
    this._defense += randomNumber;
    this._energy.amount = 10;
    
    if (this._race.maxLifePoints < this._maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
      if (this._lifePoints <= 0) {
        this._lifePoints = -1;
      }
    }
    return this._lifePoints;
  }
}

const caracter1 = new Character('Guilherme');
console.log(caracter1.defense);
console.log(caracter1.lifePoints);
caracter1.receiveDamage(10);
console.log(caracter1.lifePoints);
