import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static instances = 0;
  
  constructor(name: string, maxLifePoints: number) {
    super(name, maxLifePoints);
    this._maxLifePoints = 80;
    Dwarf.instances += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}
