import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energy: EnergyType;
  static instances = 0;
  
  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Ranger.instances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }
}