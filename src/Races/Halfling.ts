import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, maxLifePoints: number) {
    super(name, maxLifePoints);
    this._maxLifePoints = 60; 
    Halfling.instances += 1; 
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}