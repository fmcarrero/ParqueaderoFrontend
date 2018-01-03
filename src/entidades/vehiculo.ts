import { Estacionamiento } from "./estacionamiento";

export class Vehiculo {

  placa : string;
  color : string;
  cilindraje: number;
  idTipoVehiculo: number;    
  estacionamiento : Estacionamiento;

  constructor(values: Object = {}) {
    //Constructor initialization
    Object.assign(this, values);
  }
}